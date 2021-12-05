<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Menu;

use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use SimpleXMLElement;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class AbstractMenuBuilder
{
    protected FactoryInterface $factory;
    protected AuthorizationCheckerInterface $authorizationChecker;
    protected TranslatorInterface $translator;
    protected RequestStack $request;
    protected ?SimpleXMLElement $menuData;
    protected RouterInterface $router;

    public function __construct(
        FactoryInterface $factory,
        AuthorizationCheckerInterface $authorizationChecker,
        TranslatorInterface $translator,
        RequestStack $request,
        RouterInterface $router
    ) {
        $this->factory = $factory;
        $this->authorizationChecker = $authorizationChecker;
        $this->translator = $translator;
        $this->menuData = null;
        $this->request = $request;
        $this->router = $router;
    }

    abstract function createMenu(): ItemInterface;

    protected function loadMenuFromXml(string $filename): ItemInterface
    {
        if (is_null($this->menuData)) {
            $this->menuData = simplexml_load_file($filename);
        }

        $menu = $this->factory->createItem('root');

        foreach ($this->menuData->item as $item) {
            $this->createMenuItems($menu, $item);
        }

        return $menu;
    }

    protected function createMenuItems(ItemInterface $parent, SimpleXMLElement $item): void
    {
        $route = $item['route'] ?? null;
        $title = $item['title'] ?? null;

        if (is_null($title) && !is_null($route)) {
            $title = 'routes.' . $route;
        }

        $menu = $this->createMenuItem(
            $parent,
            $item,
            $title,
            $item['role'] ?? null,
            $route,
            $item['uri'] ?? null,
            $item['icon-class'] ?? null,
        );

        if ($menu) {
            foreach ($item->item as $node) {
                $this->createMenuItems($menu, $node);
            }
        }
    }

    protected function createMenuItem(
        ItemInterface $parent,
        SimpleXMLElement $params,
        string $title,
        ?string $role = null,
        ?string $route = null,
        ?string $uri = null,
        ?string $iconClass = null
    ): ?ItemInterface
    {
        $item = null;

        if (is_null($role) || $this->authorizationChecker->isGranted($role)) {
            $options = ['label' => $this->translator->trans($title, [], $this->getTranslationDomain())];
            $name = uniqid();
            $hidden = isset($params['hidden']) && (string)$params['hidden'] === 'true';

            if ($hidden) {
                $options['attributes'] = [
                    'style' => 'display: none;',
                    'aria-hidden' => 'true',
                ];
            }

            if ($route) {
                $options['route'] = $route;
                $name = $route . '_' . $name;
                $this->addRouteParameters($route, $params, $hidden, $options);
            }

            if (is_null($route) && $uri) {
                $options['uri'] = $uri;
                $name = $uri . '_' . $name;
            }

            $item = $parent->addChild($name, $options);
            $item->setExtra('hidden', $hidden);

            if ($iconClass) {
                $item->setExtra('icon_class', $iconClass);
            }
        }

        return $item;
    }

    protected function addRouteParameters(
        string $routeName,
        SimpleXMLElement $params,
        bool $hidden,
        array &$options
    ): void
    {
        $options['routeParameters'] = [];
        $parameters = $params->xpath('param');

        if (!empty($parameters)) {
            foreach ($parameters as $param) {
                if (isset($param['name'])) {
                    $options['routeParameters'][(string)$param['name']] = (string)$param;
                }
            }
        }

        if ($hidden) {
            $collection = $this->router->getRouteCollection();
            $route = $collection->get($routeName);

            if (is_null($route)) {
                $locale = $this->translator->getLocale();
                $route = $collection->get("$routeName.$locale");
            }

            $variables = [];
            preg_match_all('#\{\w+\}#', $route->getPath(), $matches, PREG_OFFSET_CAPTURE | PREG_SET_ORDER);
            foreach ($matches as $match) {
                $variables[] = substr($match[0][0], 1, -1);
            }

            if (!empty($variables)) {
                $defaults = $route->getDefaults();
                foreach ($variables as $variable) {
                    if (!isset($options['routeParameters'][$variable]) && !isset($defaults[$variable])) {
                        $value = $this->request->getCurrentRequest()->attributes->get($variable, '0');
                        $options['routeParameters'][$variable] = empty($value) ? '0' : $value;
                    }
                }
            }
        }
    }

    abstract protected function getTranslationDomain(): string;
}

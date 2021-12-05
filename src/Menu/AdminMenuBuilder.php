<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Menu;

use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

final class AdminMenuBuilder extends AbstractMenuBuilder
{
    private ParameterBagInterface $params;

    public function __construct(
        FactoryInterface $factory,
        AuthorizationCheckerInterface $authorizationChecker,
        TranslatorInterface $translator,
        RequestStack $request,
        RouterInterface $router,
        ParameterBagInterface $params
    )
    {
        parent::__construct($factory, $authorizationChecker, $translator, $request, $router);
        $this->params = $params;
    }

    public function createMenu(): ItemInterface
    {
        return $this->loadMenuFromXml($this->params->get('kernel.project_dir') . '/menu/admin_menu.xml');
    }

    protected function getTranslationDomain(): string
    {
        return 'admin_menu';
    }
}

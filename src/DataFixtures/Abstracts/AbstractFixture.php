<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\DataFixtures\Abstracts;

use Doctrine\Common\DataFixtures\AbstractFixture as BaseFixture;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use DOMXPath;
use DOMDocument;
use ReflectionClass;
use Exception;
use UnexpectedValueException;

abstract class AbstractFixture extends BaseFixture implements ContainerAwareInterface
{
    protected ContainerInterface $container;
    protected string $fixturesDirectory;

    /**
     * {@inheritdoc}
     */
    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
        $this->fixturesDirectory = $this->container->getParameter('kernel.project_dir') . '/fixtures/';
    }

    protected function getFixturesDirectory(): string
    {
        return $this->fixturesDirectory;
    }

    protected function openXmlFile(string $filename): DOMXPath
    {
        $path = $this->getFixturesDirectory() . $filename;

        if (!file_exists($path)) {
            throw new Exception("Fixtures file not found: $path");
        }

        $document = new DOMDocument();
        $document->loadXML(file_get_contents($path));

        return new DOMXPath($document);
    }

    protected function isSubclassOf(string $class, string $subclass): bool
    {
        $reflection = new ReflectionClass($class);

        return $reflection->isSubclassOf($subclass);
    }

    protected function throwIsNotSubclass(string $class, string $subclass): void
    {
        if (!$this->isSubclassOf($class, $subclass)) {
            throw new UnexpectedValueException($class . ' is not subclass of ' . $subclass);
        }
    }

    protected function createEntity(string $class, ?string $checkIsSubclass = null): object
    {
        if (is_string($checkIsSubclass)) {
            $this->throwIsNotSubclass($class, $checkIsSubclass);
        }

        return new $class();
    }
}

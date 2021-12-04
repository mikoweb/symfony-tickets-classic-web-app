<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\DataFixtures\Abstracts;

use Doctrine\Persistence\ObjectManager;
use App\Entity\Abstracts\RoleAbstract;

abstract class AbstractRoleFixture extends AbstractFixture
{
    protected bool $throwIfExist;

    public function loadRolesFromXml(ObjectManager $manager, string $filename): void
    {
        $xpath = $this->openXmlFile($filename);

        foreach ($xpath->query('/roles/group') as $tag) {
            foreach ($tag->getElementsByTagName('role') as $role) {
                if ($role->hasAttribute('name')) {
                    $name = 'roles.names.' . $role->getAttribute('name');
                } else {
                    $name = 'roles.names.' . strtolower($role->getAttribute('role'));
                }

                $this->createRole(
                    $manager,
                    $role->getAttribute('role'),
                    $name,
                    'roles.tags.' . $tag->getAttribute('tag')
                );
            }
        }
    }

    abstract public function getRoleClass(): string;

    public function createRoleEntity(): RoleAbstract
    {
        /** @var RoleAbstract $entity */
        $entity = $this->createEntity($this->getRoleClass(), RoleAbstract::class);

        return $entity;
    }

    public function createRole(ObjectManager $manager, string $role, string $name, string $tag): RoleAbstract
    {
        $this->throwIsNotSubclass($this->getRoleClass(), RoleAbstract::class);

        if ($result = $manager->getRepository($this->getRoleClass())->findOneBy([
            'role' => $role
        ])) {
            if ($this->isThrowIfExist()) {
                throw new \UnexpectedValueException($role . ' is exists.');
            }

            $result->setName($name);
            $result->setTag($tag);
            $manager->persist($result);
            $this->setReference('Role.' . $role, $result);

            return $result;
        }

        $entity = $this->createRoleEntity();
        $entity->setRole($role);
        $entity->setName($name);
        $entity->setTag($tag);
        $entity->setIrremovable(true);

        $manager->persist($entity);
        $this->setReference('Role.' . $role, $entity);

        return $entity;
    }

    public function isThrowIfExist(): bool
    {
        return $this->throwIfExist === null || $this->throwIfExist === true;
    }

    public function setThrowIfExist(bool $throwIfExist): void
    {
        $this->throwIfExist = $throwIfExist;
    }
}

<?php
/*
 * Copyright Rafał Mikołajun (c) 2021.
 */

namespace App\DataFixtures\Abstracts;

use Doctrine\Persistence\ObjectManager;
use App\Entity\Abstracts\GroupAbstract;
use App\Entity\Abstracts\RoleAbstract;

abstract class AbstractGroupFixture extends AbstractFixture
{
    public function loadGroupRolesFromXml(string $filename, ObjectManager $manager): void
    {
        $this->throwIsNotSubclass($this->getRoleClass(), RoleAbstract::class);
        $allRoles = $manager->getRepository($this->getRoleClass())->findAll();

        foreach ($allRoles as $role) {
            $this->setReference('Role.' . $role->getRole(), $role);
        }

        $xpath = $this->openXmlFile($filename);

        foreach ($xpath->query('/groups/group') as $group) {
            $reference = $group->getAttribute('reference');

            if ($group->hasAttribute('allroles')) {
                $this->addRoles($reference, $allRoles);
            } else {
                $roles = [];

                foreach ($group->getElementsByTagName('role') as $role) {
                    if (!empty($role->nodeValue)) {
                        $roles[] = $role->nodeValue;
                    }
                }

                $this->addRoles($reference, $roles);
            }
        }
    }

    abstract public function getGroupClass(): string;
    abstract public function getRoleClass(): string;

    public function createGroupEntity(): GroupAbstract
    {
        /** @var GroupAbstract $entity */
        $entity = $this->createEntity($this->getGroupClass(), GroupAbstract::class);

        return $entity;
    }

    public function addRoles(string $reference, array $roles): void
    {
        /** @var GroupAbstract $group */
        $group = $this->getReference($reference);

        if (!$group instanceof GroupAbstract) {
            throw new \UnexpectedValueException('Reference is not GroupAbstract');
        }

        foreach ($roles as $role) {
            /** @var RoleAbstract $roleEntity */
            $roleEntity = $this->getReference('Role.' . $role);

            if (!$group->hasRole($roleEntity)) {
                $group->addRole($roleEntity);
            }
        }
    }

    public function createGroup(
        ObjectManager $manager,
        string $name,
        string $groupRole,
        bool $irremovable = true
    ): GroupAbstract
    {
        $this->throwIsNotSubclass($this->getGroupClass(), GroupAbstract::class);

        if ($result = $manager->getRepository($this->getGroupClass())->findOneBy([
            'name' => $name
        ])) {
            $result->setGroupRole($groupRole);
            $result->setIrremovable($irremovable);
            $manager->persist($result);

            return $result;
        }

        $group = $this->createGroupEntity();
        $group->setName($name);
        $group->setGroupRole($groupRole);
        $group->setIrremovable($irremovable);

        $manager->persist($group);

        return $group;
    }
}

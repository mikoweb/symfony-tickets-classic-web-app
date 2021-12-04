<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\DataFixtures;

use App\DataFixtures\Abstracts\AbstractGroupFixture;
use App\Entity\Enums\GroupEnum;
use App\Entity\Enums\RoleEnum;
use App\Entity\UserGroup;
use App\Entity\UserRole;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Bundle\FixturesBundle\ORMFixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class UserGroupsFixture extends AbstractGroupFixture implements
    OrderedFixtureInterface,
    FixtureGroupInterface,
    ORMFixtureInterface
{
    /**
     * {@inheritdoc}
     */
    public static function getGroups(): array
    {
        return ['users'];
    }

    /**
     * {@inheritdoc}
     */
    public function load(ObjectManager $manager)
    {
        /** @var UserGroup $clientGroup */
        $clientGroup = $this->createGroup(
            $manager,
            GroupEnum::CLIENT->name(),
            RoleEnum::CLIENT->name()
        );

        $this->setReference('Group.Client', $clientGroup);

        /** @var UserGroup $adminGroup */
        $adminGroup = $this->createGroup(
            $manager,
            GroupEnum::ADMIN->name(),
            RoleEnum::ADMIN->name()
        );

        $this->setReference('Group.Admin', $adminGroup);

        foreach ($manager->getRepository(UserRole::class)->findAll() as $role) {
            $this->setReference('Role.' . $role->getRole(), $role);
        }

        $this->loadGroupRolesFromXml('user_group_roles.xml', $manager);

        $manager->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function getGroupClass(): string
    {
        return UserGroup::class;
    }

    /**
     * {@inheritdoc}
     */
    public function getRoleClass(): string
    {
        return UserRole::class;
    }

    /**
     * {@inheritdoc}
     */
    public function getOrder(): int
    {
        return 40;
    }
}

<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\DataFixtures;

use App\DataFixtures\Abstracts\AbstractRoleFixture;
use App\Entity\UserRole;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Bundle\FixturesBundle\ORMFixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class UserRolesFixture extends AbstractRoleFixture implements
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
        $this->setThrowIfExist(false);
        $this->loadRolesFromXml($manager, 'user_roles.xml');

        $manager->flush();
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
        return 20;
    }
}

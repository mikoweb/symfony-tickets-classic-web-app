<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\DataFixtures;

use App\Entity\TicketTopic;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Bundle\FixturesBundle\ORMFixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class TicketTopicsFixture extends AbstractFixture implements
    OrderedFixtureInterface,
    FixtureGroupInterface,
    ORMFixtureInterface
{
    /**
     * {@inheritdoc}
     */
    public static function getGroups(): array
    {
        return ['ticket_topics'];
    }

    /**
     * {@inheritdoc}
     */
    public function load(ObjectManager $manager)
    {
        $this->createTicketTopic($manager, 'Topic 1');
        $this->createTicketTopic($manager, 'Topic 2');
        $this->createTicketTopic($manager, 'Topic 3');
        $manager->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function getOrder(): int
    {
        return 200;
    }

    private function createTicketTopic(ObjectManager $manager, string $name): TicketTopic
    {
        if (($topic = $manager->getRepository(TicketTopic::class)->findOneBy(['name' => $name])) === null) {
            $topic = new TicketTopic($name);
        }

        $manager->persist($topic);

        return $topic;
    }
}

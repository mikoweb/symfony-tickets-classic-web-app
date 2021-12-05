<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Ticket;

use App\Message\Ticket\SendTicketMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use InvalidArgumentException;

final class SendTicketHandler implements MessageHandlerInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function __invoke(SendTicketMessage $message): void
    {
        if (!$message->form->isSubmitted() || !$message->form->isValid()) {
            throw new InvalidArgumentException('Invalid form');
        }

        $this->entityManager->persist($message->ticket);
        $this->entityManager->flush();
    }
}

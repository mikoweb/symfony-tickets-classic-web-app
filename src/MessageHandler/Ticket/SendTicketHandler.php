<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Ticket;

use App\Event\Ticket\TicketSentEvent;
use App\Message\Ticket\SendTicketMessage;
use App\Uploader\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use InvalidArgumentException;

final class SendTicketHandler implements MessageHandlerInterface
{
    private EntityManagerInterface $entityManager;
    private FileUploader $uploader;
    private EventDispatcherInterface $eventDispatcher;

    public function __construct(
        EntityManagerInterface $entityManager,
        FileUploader $uploader,
        EventDispatcherInterface $eventDispatcher
    )
    {
        $this->entityManager = $entityManager;
        $this->uploader = $uploader;
        $this->eventDispatcher = $eventDispatcher;
    }

    public function __invoke(SendTicketMessage $message): void
    {
        $form = $message->form;
        $ticket = $message->ticket;

        if (!$form->isSubmitted() || !$form->isValid()) {
            throw new InvalidArgumentException('Invalid form');
        }

        if ($form->has('file') && !is_null($form->get('file')->getData())) {
            $fileName = $this->uploader->upload($form->get('file')->getData());
            $ticket->setFilename($fileName);
        }

        $this->entityManager->persist($ticket);
        $this->entityManager->flush();

        $this->eventDispatcher->dispatch(new TicketSentEvent($ticket));
    }
}

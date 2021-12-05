<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Ticket;

use App\Message\Ticket\SendTicketMessage;
use App\Uploader\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use InvalidArgumentException;

final class SendTicketHandler implements MessageHandlerInterface
{
    private EntityManagerInterface $entityManager;
    private FileUploader $uploader;

    public function __construct(EntityManagerInterface $entityManager, FileUploader $uploader)
    {
        $this->entityManager = $entityManager;
        $this->uploader = $uploader;
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
    }
}

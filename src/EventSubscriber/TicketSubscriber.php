<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\EventSubscriber;

use App\Event\Ticket\TicketSentEvent;
use App\Message\Ticket\SendTicketEmailToAdminMessage;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Messenger\MessageBusInterface;

final class TicketSubscriber implements EventSubscriberInterface
{
    private MessageBusInterface $bus;

    public function __construct(MessageBusInterface $bus)
    {
        $this->bus = $bus;
    }

    public function onTicketSent(TicketSentEvent $event): void
    {
        $this->bus->dispatch(new SendTicketEmailToAdminMessage($event->ticket));
    }

    public static function getSubscribedEvents(): array
    {
        return [
            TicketSentEvent::class => 'onTicketSent',
        ];
    }
}

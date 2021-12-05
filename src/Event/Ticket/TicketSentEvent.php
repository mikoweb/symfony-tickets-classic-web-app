<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Event\Ticket;

use App\Entity\Ticket;
use Symfony\Contracts\EventDispatcher\Event;

final class TicketSentEvent extends Event
{
    public readonly Ticket $ticket;

    public function __construct(Ticket $ticket)
    {
        $this->ticket = $ticket;
    }
}

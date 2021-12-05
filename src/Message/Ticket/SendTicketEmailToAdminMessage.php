<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Message\Ticket;

use App\Entity\Ticket;

final class SendTicketEmailToAdminMessage
{
    public readonly Ticket $ticket;

    public function __construct(Ticket $ticket)
    {
        $this->ticket = $ticket;
    }
}

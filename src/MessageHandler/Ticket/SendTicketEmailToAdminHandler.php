<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Ticket;

use App\Message\Ticket\SendTicketEmailToAdminMessage;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class SendTicketEmailToAdminHandler implements MessageHandlerInterface
{
    public function __invoke(SendTicketEmailToAdminMessage $message): void
    {
        // TODO send email
    }
}

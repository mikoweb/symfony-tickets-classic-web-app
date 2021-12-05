<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Message\Ticket;

use App\Entity\Ticket;
use Symfony\Component\Form\FormInterface;

final class SendTicketMessage
{
    public readonly FormInterface $form;
    public readonly Ticket $ticket;

    public function __construct(FormInterface $form)
    {
        $this->form = $form;
        $this->ticket = $form->getData();
    }
}

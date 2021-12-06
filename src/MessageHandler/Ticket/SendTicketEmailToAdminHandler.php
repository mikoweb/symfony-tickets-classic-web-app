<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Ticket;

use App\Message\Ticket\SendTicketEmailToAdminMessage;
use App\Repository\AdminRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Contracts\Translation\TranslatorInterface;

final class SendTicketEmailToAdminHandler implements MessageHandlerInterface
{
    private AdminRepository $adminRepository;
    private MailerInterface $mailer;
    private TranslatorInterface $translator;

    public function __construct(
        AdminRepository $adminRepository,
        MailerInterface $mailer,
        TranslatorInterface $translator
    )
    {
        $this->adminRepository = $adminRepository;
        $this->mailer = $mailer;
        $this->translator = $translator;
    }

    public function __invoke(SendTicketEmailToAdminMessage $message): void
    {
        $admin = $this->adminRepository->getFirstAdmin();

        if (!is_null($admin)) {
            $email = (new TemplatedEmail())
                ->from(new Address($message->ticket->getEmail()))
                ->to(new Address($admin->getEmail()))
                ->subject($this->translator->trans('email.ticket_notification.subject'))
                ->text('Sending emails is fun again!')
                ->htmlTemplate('emails/ticket_notification.html.twig')
                ->context([
                    'ticket' => $message->ticket,
                ])
            ;

            $this->mailer->send($email);
        }
    }
}

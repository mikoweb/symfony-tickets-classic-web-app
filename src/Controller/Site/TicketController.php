<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Controller\Site;

use App\Entity\Ticket;
use App\Form\Site\TicketType;
use App\Message\Ticket\SendTicketMessage;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Throwable;

class TicketController extends AbstractController
{
    private TranslatorInterface $translator;
    private MessageBusInterface $bus;

    public function __construct(TranslatorInterface $translator, MessageBusInterface $bus)
    {
        $this->translator = $translator;
        $this->bus = $bus;
    }

    #[IsGranted('ROLE_TICKETS_LIST')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_site_ticket_create');
    }

    #[IsGranted('ROLE_TICKET_CREATE')]
    public function create(Request $request): Response
    {
        $ticket = new Ticket();
        $ticket->setEmail($this->getUser()->getEmail());

        $form = $this->createForm(TicketType::class, $ticket, [
            'method' => 'post',
            'action' => $this->generateUrl('app_site_ticket_create'),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                $this->bus->dispatch(new SendTicketMessage($form));
                $this->addFlash('site_success', $this->translator->trans('site.message.ticket_send'));
            } catch (Throwable) {
                $this->addFlash('site_error', $this->translator->trans('site.message.ticket_send_error'));
            }

            return $this->redirectToRoute('app_site_ticket_create');
        }

        return $this->render('site/ticket/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

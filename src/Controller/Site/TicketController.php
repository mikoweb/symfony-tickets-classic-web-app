<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Controller\Site;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TicketController extends AbstractController
{
    #[IsGranted('ROLE_TICKETS_LIST')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_site_ticket_create');
    }

    #[IsGranted('ROLE_TICKET_CREATE')]
    public function create(): Response
    {
        return $this->render('site/ticket/create.html.twig');
    }
}

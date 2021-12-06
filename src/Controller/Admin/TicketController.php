<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Controller\Admin;

use App\Entity\Ticket;
use App\Repository\TicketRepository;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TicketController extends AbstractController
{
    #[IsGranted('ROLE_ADMIN_TICKETS_LIST')]
    public function index(Request $request, TicketRepository $repository, PaginatorInterface $paginator): Response
    {
        $pagination = $paginator->paginate(
            $repository->createQueryBuilder('t')->orderBy('t.createdAt', 'DESC'),
            $request->query->getInt('page', 1),
            $request->query->getInt('limit', $this->getParameter('app_items_per_page'))
        );

        return $this->render('admin/ticket/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[IsGranted('ROLE_ADMIN_TICKET_SHOW')]
    public function show(Ticket $ticket): Response
    {
        return $this->render('admin/ticket/show.html.twig', [
            'ticket' => $ticket,
        ]);
    }
}

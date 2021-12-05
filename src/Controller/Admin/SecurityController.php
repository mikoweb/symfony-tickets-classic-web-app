<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Controller\Admin;

use App\Form\Admin\LoginType;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
        $lastUsername = $authenticationUtils->getLastUsername();
        $form = $this->createForm(LoginType::class, ['email' => $lastUsername], [
            'method' => 'post',
            'action' => $this->generateUrl('app_admin_login'),
        ]);

        $form->handleRequest($request);

        return $this->render('admin/login/index.html.twig', [
            'form' => $form->createView(),
            'last_username' => $lastUsername,
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    public function logout(): never
    {
        throw new Exception("Don't forget to activate logout in security.yaml");
    }
}

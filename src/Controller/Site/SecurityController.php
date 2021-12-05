<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Controller\Site;

use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('site/login/index.html.twig', [
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    public function logout(): never
    {
        throw new Exception("Don't forget to activate logout in security.yaml");
    }
}

<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Controller\Site;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('site/index.html.twig');
    }
}

<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Interfaces;

interface RoleInterface
{
    public function __toString(): string;
    public function getRole(): string;
    public function getName(): string;
}

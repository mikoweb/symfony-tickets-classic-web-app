<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Enums;

enum RoleEnum
{
    case ADMIN;
    case CLIENT;

    public function name(): string
    {
        return match($this)
        {
            RoleEnum::ADMIN => 'ROLE_ADMIN',
            RoleEnum::CLIENT => 'ROLE_CLIENT',
        };
    }
}

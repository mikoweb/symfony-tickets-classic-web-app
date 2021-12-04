<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Enums;

enum GroupEnum
{
    case ADMIN;
    case CLIENT;

    public function name(): string
    {
        return match($this)
        {
            GroupEnum::ADMIN => 'groups.names.admin',
            GroupEnum::CLIENT => 'groups.names.client',
        };
    }
}

<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Message\User;

final class CreateClientUserMessage
{
    public readonly string $email;
    public readonly string $password;

    public function __construct(string $email, string $password)
    {
        $this->email = $email;
        $this->password = $password;
    }
}

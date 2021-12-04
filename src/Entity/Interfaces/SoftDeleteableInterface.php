<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Interfaces;

use DateTime;

interface SoftDeleteableInterface
{
    public function getDeletedAt(): ?DateTime;
    public function setDeletedAt(?DateTime $deletedAt = null): self;
}

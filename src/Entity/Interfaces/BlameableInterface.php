<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Interfaces;

use App\Entity\User;

interface BlameableInterface
{
    public function getCreatedBy(): ?User;
    public function setCreatedBy(?User $createdBy): self;
    public function getUpdatedBy(): ?User;
    public function setUpdatedBy(?User $updatedBy): self;
}

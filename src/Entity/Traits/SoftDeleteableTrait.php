<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use DateTime;

trait SoftDeleteableTrait
{
    /**
     * @var DateTime|null
     *
     * @ORM\Column(name="deleted_at", type="datetime", nullable=true)
     */
    protected ?DateTime $deletedAt;

    public function getDeletedAt(): ?DateTime
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?DateTime $deletedAt = null): self
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }
}

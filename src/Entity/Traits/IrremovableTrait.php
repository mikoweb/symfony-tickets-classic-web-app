<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Exception\ORMException;

trait IrremovableTrait
{
    /**
     * @var bool
     *
     * @ORM\Column(type="boolean", name="irremovable", options={"default": 0}))
     */
    protected bool $irremovable;

    public function isIrremovable(): bool
    {
        return $this->irremovable;
    }

    public function setIrremovable(bool $irremovable): self
    {
        $this->irremovable = $irremovable;

        return $this;
    }

    /**
     * @ORM\PreRemove
     * @throws ORMException
     */
    public function onPreRemove(): void
    {
        if ($this->isIrremovable()) {
            throw new ORMException('You can not delete irremovable entity.');
        }
    }
}

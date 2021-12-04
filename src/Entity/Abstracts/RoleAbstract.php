<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Abstracts;

use App\Entity\Interfaces\RoleInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Interfaces\SoftDeleteableInterface;
use App\Entity\Interfaces\TimestampableInterface;
use App\Entity\Traits\IrremovableTrait;
use App\Entity\Traits\SoftDeleteableTrait;
use App\Entity\Traits\TimestampableTrait;

abstract class RoleAbstract implements RoleInterface, SoftDeleteableInterface, TimestampableInterface
{
    use SoftDeleteableTrait;
    use TimestampableTrait;
    use IrremovableTrait;

    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected int $id;

    /**
     * @var string
     *
     * @ORM\Column(type="string", name="role", unique=true, nullable=false)
     */
    protected string $role;

    /**
     * @var string
     *
     * @ORM\Column(type="string", name="name", unique=true, nullable=false)
     */
    protected string $name;

    /**
     * @var string
     *
     * @ORM\Column(name="tag", type="string", nullable=false)
     */
    protected string $tag;

    public function __construct()
    {
        $this->irremovable = false;
    }

    public function __toString(): string
    {
        return $this->getRole();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getRole(): string
    {
        return $this->role;
    }

    public function setRole(string $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTag(): string
    {
        return $this->tag;
    }

    public function setTag(string $tag): self
    {
        $this->tag = $tag;

        return $this;
    }
}

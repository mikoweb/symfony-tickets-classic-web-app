<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Abstracts;

use App\Entity\Interfaces\GroupInterface;
use App\Entity\Interfaces\RoleInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Interfaces\SoftDeleteableInterface;
use App\Entity\Interfaces\TimestampableInterface;
use App\Entity\Traits\IrremovableTrait;
use App\Entity\Traits\SoftDeleteableTrait;
use App\Entity\Traits\TimestampableTrait;

abstract class GroupAbstract implements GroupInterface, SoftDeleteableInterface, TimestampableInterface
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

    protected ArrayCollection|Collection|array $roles;

    /**
     * @var string
     *
     * @ORM\Column(type="string", name="name", unique=true, nullable=false)
     */
    protected string $name;

    protected ArrayCollection|Collection|array $users;

    /**
     * @var string
     *
     * @ORM\Column(name="group_role", type="string", nullable=false)
     */
    protected string $groupRole;

    public function __construct()
    {
        $this->roles = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->irremovable = false;
    }

    public function __toString(): string
    {
        return $this->getName();
    }

    public function getId(): int
    {
        return $this->id;
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

    public function getGroupRole(): string
    {
        return $this->groupRole;
    }

    public function setGroupRole(string $groupRole): self
    {
        $this->groupRole = $groupRole;

        return $this;
    }

    public function addRole(RoleInterface $role): self
    {
        if (!$this->roles->contains($role)) {
            $this->roles->add($role);
        }

        return $this;
    }

    public function hasRole(RoleInterface $role): bool
    {
        return $this->roles->contains($role);
    }

    public function getRoles(): array
    {
        $roles = [];
        foreach ($this->roles as $role) {
            $roles[] = (string)$role;
        }

        $roles[] = $this->getGroupRole();

        return array_unique($roles);
    }

    public function removeRole(RoleInterface $role): self
    {
        $this->roles->removeElement($role);

        return $this;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = new ArrayCollection($roles);

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }
}

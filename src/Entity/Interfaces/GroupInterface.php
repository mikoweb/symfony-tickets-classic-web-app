<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Interfaces;

interface GroupInterface
{
    public function __toString(): string;
    public function getName(): string;
    public function setName(string $name): self;

    public function addRole(RoleInterface $role): self;
    public function hasRole(RoleInterface $role): bool;
    public function getRoles(): array;
    public function removeRole(RoleInterface $role): self;
    public function setRoles(array $roles): self;

    public function setGroupRole(string $groupRole): self;
    public function getGroupRole(): string;
}

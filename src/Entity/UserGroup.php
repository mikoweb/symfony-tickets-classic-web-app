<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity;

use App\Entity\Abstracts\AbstractGroup;
use App\Entity\Interfaces\GroupInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\ExclusionPolicy;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GroupRepository")
 * @ORM\Table(name="user_groups")
 *
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity(fields={"name"}, errorPath="name", message="group.unique_name")
 *
 * @ExclusionPolicy("all")
 */
class UserGroup extends AbstractGroup implements GroupInterface
{
    /**
     * @var ArrayCollection|UserRole[]
     *
     * @ORM\ManyToMany(targetEntity="UserRole", inversedBy="groups")
     * @ORM\JoinTable(name="user_groups_roles",
     *     joinColumns={@ORM\JoinColumn(name="group_id", referencedColumnName="id")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="role_id", referencedColumnName="id")}
     * )
     */
    protected ArrayCollection|Collection|array $roles;

    /**
     * @var ArrayCollection|User[]
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="groups")
     */
    protected ArrayCollection|Collection|array $users;

    /**
     * @var ArrayCollection|Admin[]
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\Admin", mappedBy="groups")
     */
    protected ArrayCollection|Collection|array $admins;

    /**
     * @return ArrayCollection
     */
    public function getAdmins(): Collection
    {
        return $this->admins;
    }
}

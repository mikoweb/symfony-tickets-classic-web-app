<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity;

use App\Entity\Abstracts\RoleAbstract;
use App\Entity\Interfaces\RoleInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\ExclusionPolicy;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="user_roles")
 *
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity(fields={"name"}, errorPath="name", message="role.unique_name")
 * @UniqueEntity(fields={"role"}, errorPath="role", message="role.unique_role")
 *
 * @ExclusionPolicy("all")
 */
class UserRole extends RoleAbstract implements RoleInterface
{
    /**
     * @var ArrayCollection|UserGroup[]
     *
     * @ORM\ManyToMany(targetEntity="UserGroup", mappedBy="roles")
     */
    private ArrayCollection|Collection|array $groups;

    /**
     * @return ArrayCollection|Collection|UserGroup[]
     */
    public function getGroups(): ArrayCollection|Collection|array
    {
        return $this->groups;
    }
}

<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity;

use App\Entity\Abstracts\AbstractUser;
use App\Entity\Enums\RoleEnum;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation\ExclusionPolicy;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AdminRepository")
 * @ORM\Table(name="admins")
 * @ORM\AssociationOverrides({
 *     @ORM\AssociationOverride(
 *          name="groups",
 *          joinTable=@ORM\JoinTable(
 *              name="admins_groups",
 *              joinColumns=@ORM\JoinColumn(name="admin_id", referencedColumnName="id"),
 *              inverseJoinColumns=@ORM\JoinColumn(name="group_id", referencedColumnName="id")
 *          )
 *     )
 * })
 *
 * @UniqueEntity(fields={"email"}, errorPath="email")
 *
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=true)
 *
 * @ExclusionPolicy("all")
 */
class Admin extends AbstractUser
{
    const ROLE_DEFAULT = RoleEnum::ADMIN;

    /**
     * @var ArrayCollection|UserGroup[]
     *
     * @ORM\ManyToMany(targetEntity="UserGroup", inversedBy="admins", cascade={"persist"})
     */
    protected Collection|ArrayCollection|array $groups;
}

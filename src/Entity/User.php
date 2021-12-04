<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity;

use App\Entity\Abstracts\AbstractUser;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation\ExclusionPolicy;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="users")
 *
 * @UniqueEntity(fields={"email"}, errorPath="email")
 *
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=true)
 *
 * @ExclusionPolicy("all")
 */
class User extends AbstractUser
{
}

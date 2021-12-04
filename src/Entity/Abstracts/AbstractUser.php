<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity\Abstracts;

use App\Entity\Enums\RoleEnum;
use App\Entity\Interfaces\SoftDeleteableInterface;
use App\Entity\Interfaces\TimestampableInterface;
use App\Entity\Traits\SoftDeleteableTrait;
use App\Entity\Traits\TimestampableTrait;
use App\Entity\UserGroup;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\MappedSuperclass
 */
abstract class AbstractUser implements
    UserInterface,
    PasswordAuthenticatedUserInterface,
    TimestampableInterface,
    SoftDeleteableInterface
{
    const ROLE_DEFAULT = RoleEnum::CLIENT;

    use TimestampableTrait;
    use SoftDeleteableTrait;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private int $id;

    /**
     * @var array
     *
     * @ORM\Column(name="roles", type="array")
     */
    private array $roles;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string")
     *
     * @Assert\NotBlank()
     */
    private string $password;

    /**
     * @var string|null
     *
     * @Assert\NotBlank(groups={"registration", "change_password"})
     * @Assert\Length(min=4, max=100)
     */
    private ?string $plainPassword;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", unique=true, length=255)
     *
     * @Assert\Email()
     * @Assert\NotBlank(groups={"registration"})
     * @Assert\Length(max=255)
     */
    private string $email;

    /**
     * @var ArrayCollection|UserGroup[]
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\UserGroup", inversedBy="users", cascade={"persist"})
     * @ORM\JoinTable(name="users_groups",
     *     joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="group_id", referencedColumnName="id")}
     * )
     */
    protected Collection|ArrayCollection|array $groups;

    public function __construct(string $email, ?string $plainPassword = null)
    {
        $this->email = $email;
        $this->plainPassword = $plainPassword;
        $this->groups = new ArrayCollection();
        $this->roles = [];
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function eraseCredentials(): self
    {
        $this->plainPassword = null;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = self::ROLE_DEFAULT->name();

        foreach ($this->getGroups() as $group) {
            $roles = array_merge(array_values(array_unique($roles)), $group->getRoles());
        }

        return array_unique($roles);
    }

    public function addRole(string $role): self
    {
        $role = strtoupper($role);
        if ($role === static::ROLE_DEFAULT->name()) {
            return $this;
        }

        if (!in_array($role, $this->roles, true)) {
            $this->roles[] = $role;
        }

        return $this;
    }

    public function removeRole(string $role): self
    {
        if (false !== $key = array_search(strtoupper($role), $this->roles, true)) {
            unset($this->roles[$key]);
            $this->roles = array_values($this->roles);
        }

        return $this;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = [];

        foreach ($roles as $role) {
            $this->addRole($role);
        }

        return $this;
    }

    /**
     * @return UserGroup[]|ArrayCollection|Collection
     */
    public function getGroups(): Collection|ArrayCollection|array
    {
        return $this->groups ?: $this->groups = new ArrayCollection();
    }

    public function getGroupNames(): array
    {
        $names = [];
        foreach ($this->getGroups() as $group) {
            $names[] = $group->getName();
        }

        return $names;
    }

    public function hasGroup(string $name): bool
    {
        return in_array($name, $this->getGroupNames());
    }

    public function addGroup(UserGroup $group): self
    {
        if (!$this->getGroups()->contains($group)) {
            $this->getGroups()->add($group);
        }

        return $this;
    }

    public function removeGroup(UserGroup $group): self
    {
        if ($this->getGroups()->contains($group)) {
            $this->getGroups()->removeElement($group);
        }

        return $this;
    }
}

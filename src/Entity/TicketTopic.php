<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity;

use App\Entity\Interfaces\TimestampableInterface;
use App\Entity\Traits\TimestampableTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\ExclusionPolicy;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Uid\UuidV4;

/**
 * @ORM\Entity
 * @ORM\Table(name="ticket_topics")
 *
 * @UniqueEntity(fields={"id"}, errorPath="id")
 *
 * @ExclusionPolicy("all")
 */
class TicketTopic implements TimestampableInterface
{
    use TimestampableTrait;

    /**
     * @ORM\Id
     * @ORM\Column(type="uuid", name="id", unique=true)
     */
    private string $id;

    /**
     * @ORM\Column(type="string", name="name", nullable=false, length=255)
     *
     * @Assert\NotBlank()
     * @Assert\Length(max=255)
     */
    private string $name;

    /**
     * @var ArrayCollection|Ticket[]
     *
     * @ORM\OneToMany(targetEntity="App\Entity\Ticket", mappedBy="topic")
     */
    private array|ArrayCollection|Collection $tickets;

    public function __construct(string $name)
    {
        $this->id = Uuid::v4();
        $this->name = $name;
        $this->tickets = new ArrayCollection();
    }

    public function getId(): UuidV4|string
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

    /**
     * @return Ticket[]|ArrayCollection|Collection
     */
    public function getTickets(): ArrayCollection|Collection|array
    {
        return $this->tickets;
    }
}

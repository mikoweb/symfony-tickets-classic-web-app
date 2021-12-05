<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Entity;

use App\Entity\Interfaces\BlameableInterface;
use App\Entity\Interfaces\TimestampableInterface;
use App\Entity\Traits\BlameableTrait;
use App\Entity\Traits\TimestampableTrait;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation\ExclusionPolicy;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Uid\UuidV4;

/**
 * @ORM\Entity
 * @ORM\Table(name="tickets")
 *
 * @UniqueEntity(fields={"slug"}, errorPath="slug")
 * @UniqueEntity(fields={"id"}, errorPath="id")
 *
 * @ExclusionPolicy("all")
 */
class Ticket implements TimestampableInterface, BlameableInterface
{
    use TimestampableTrait;
    use BlameableTrait;

    /**
     * @ORM\Id
     * @ORM\Column(type="uuid", name="id", unique=true)
     */
    private string $id;

    /**
     * @ORM\Column(type="string", name="title", nullable=false, length=255)
     *
     * @Assert\NotBlank()
     * @Assert\Length(max=255)
     */
    private string $title;

    /**
     * @Gedmo\Slug(fields={"title"})
     * @ORM\Column(type="string", name="slug", unique=true, nullable=false, length=255)
     *
     * @Assert\Length(max=255)
     */
    private string $slug;

    /**
     * @ORM\Column(type="string", name="email", nullable=false, length=255)
     *
     * @Assert\NotBlank()
     * @Assert\Length(max=255)
     * @Assert\Email()
     */
    private string $email;

    /**
     * @ORM\Column(type="string", name="text", nullable=false)
     *
     * @Assert\NotBlank()
     */
    private string $text;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TicketTopic", inversedBy="tickets", fetch="EAGER")
     * @ORM\JoinColumn(name="topic_id", referencedColumnName="id", nullable=false)
     *
     * @Assert\NotNull()
     */
    private TicketTopic $topic;

    /**
     * @ORM\Column(type="string", name="filename", nullable=true, length=255)
     *
     * @Assert\Length(max=255)
     */
    private ?string $filename;

    public function __construct()
    {
        $this->id = Uuid::v4();
    }

    public function getId(): UuidV4|string
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getText(): string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getTopic(): TicketTopic
    {
        return $this->topic;
    }

    public function setTopic(TicketTopic $topic): self
    {
        $this->topic = $topic;

        return $this;
    }

    public function getFilename(): ?string
    {
        return $this->filename;
    }

    public function setFilename(?string $filename): self
    {
        $this->filename = $filename;

        return $this;
    }
}

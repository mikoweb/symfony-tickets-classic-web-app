<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\User;

use App\Entity\Enums\GroupEnum;
use App\Entity\User;
use App\Message\User\CreateClientUserMessage;
use App\Repository\GroupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Exception\ValidationFailedException;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class CreateClientUserHandler implements MessageHandlerInterface
{
    private UserPasswordHasherInterface $passwordHasher;
    private GroupRepository $groupRepository;
    private ValidatorInterface $validator;
    private EntityManagerInterface $entityManager;

    public function __construct(
        UserPasswordHasherInterface $passwordHasher,
        GroupRepository $groupRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $entityManager
    )
    {
        $this->passwordHasher = $passwordHasher;
        $this->groupRepository = $groupRepository;
        $this->validator = $validator;
        $this->entityManager = $entityManager;
    }

    public function __invoke(CreateClientUserMessage $message): void
    {
        $user = new User($message->email, $message->password);
        $user->setPassword($this->passwordHasher->hashPassword($user, $message->password));
        $user->addGroup($this->groupRepository->getGroup(GroupEnum::CLIENT->name()));

        $violations = $this->validator->validate($user, null, ['registration', 'Default']);

        if (0 !== count($violations)) {
            throw new ValidationFailedException($user, $violations);
        }

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}

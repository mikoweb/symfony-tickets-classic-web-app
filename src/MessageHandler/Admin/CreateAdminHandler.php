<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Admin;

use App\Entity\Admin;
use App\Entity\Enums\GroupEnum;
use App\Message\Admin\CreateAdminMessage;
use App\Repository\GroupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Exception\ValidationFailedException;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class CreateAdminHandler implements MessageHandlerInterface
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

    public function __invoke(CreateAdminMessage $message): void
    {
        $admin = new Admin($message->email, $message->password);
        $admin->setPassword($this->passwordHasher->hashPassword($admin, $message->password));
        $admin->addGroup($this->groupRepository->getGroup(GroupEnum::ADMIN->name()));

        $violations = $this->validator->validate($admin, null, ['registration', 'Default']);

        if (0 !== count($violations)) {
            throw new ValidationFailedException($admin, $violations);
        }

        $this->entityManager->persist($admin);
        $this->entityManager->flush();
    }
}

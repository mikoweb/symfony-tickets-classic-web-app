<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\Admin;

use App\Message\Admin\ChangeAdminPasswordMessage;
use App\Repository\AdminRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Exception\ValidationFailedException;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use InvalidArgumentException;

final class ChangeAdminPasswordHandler implements MessageHandlerInterface
{
    private UserPasswordHasherInterface $passwordHasher;
    private AdminRepository $adminRepository;
    private ValidatorInterface $validator;
    private EntityManagerInterface $entityManager;

    public function __construct(
        UserPasswordHasherInterface $passwordHasher,
        AdminRepository $adminRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $entityManager
    )
    {
        $this->passwordHasher = $passwordHasher;
        $this->adminRepository = $adminRepository;
        $this->validator = $validator;
        $this->entityManager = $entityManager;
    }

    public function __invoke(ChangeAdminPasswordMessage $message): void
    {
        $admin = $this->adminRepository->findAdmin($message->email);

        if (is_null($admin)) {
            throw new InvalidArgumentException("Admin {$message->email} not found!");
        }

        $admin->setPlainPassword($message->password);
        $violations = $this->validator->validate($admin, null, ['change_password', 'Default']);

        if (0 !== count($violations)) {
            throw new ValidationFailedException($admin, $violations);
        }

        $admin->setPassword($this->passwordHasher->hashPassword($admin, $message->password));

        $this->entityManager->persist($admin);
        $this->entityManager->flush();
    }
}

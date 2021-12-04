<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\MessageHandler\User;

use App\Message\User\ChangeClientUserPasswordMessage;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Exception\ValidationFailedException;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use InvalidArgumentException;

final class ChangeClientUserPasswordHandler implements MessageHandlerInterface
{
    private UserPasswordHasherInterface $passwordHasher;
    private UserRepository $userRepository;
    private ValidatorInterface $validator;
    private EntityManagerInterface $entityManager;

    public function __construct(
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $entityManager
    )
    {
        $this->passwordHasher = $passwordHasher;
        $this->userRepository = $userRepository;
        $this->validator = $validator;
        $this->entityManager = $entityManager;
    }

    public function __invoke(ChangeClientUserPasswordMessage $message): void
    {
        $user = $this->userRepository->findUser($message->email);

        if (is_null($user)) {
            throw new InvalidArgumentException("User {$message->email} not found!");
        }

        $user->setPlainPassword($message->password);
        $violations = $this->validator->validate($user, null, ['change_password', 'Default']);

        if (0 !== count($violations)) {
            throw new ValidationFailedException($user, $violations);
        }

        $user->setPassword($this->passwordHasher->hashPassword($user, $message->password));

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}

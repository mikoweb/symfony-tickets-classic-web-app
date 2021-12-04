<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Command;

use App\Message\User\ChangeClientUserPasswordMessage;
use App\Repository\UserRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Messenger\Exception\HandlerFailedException;
use Symfony\Component\Messenger\Exception\ValidationFailedException;
use Symfony\Component\Messenger\MessageBusInterface;

#[AsCommand(
    name: 'app:user:change-password',
    description: 'Command to change password for client user.',
)]
class UserChangePasswordCommand extends Command
{
    private UserRepository $repository;
    private MessageBusInterface $bus;

    public function __construct(UserRepository $repository, MessageBusInterface $bus)
    {
        parent::__construct();
        $this->repository = $repository;
        $this->bus = $bus;
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::REQUIRED, 'Email')
            ->addArgument('password', InputArgument::REQUIRED, 'Password')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        if (!$this->repository->isUserExists($email)) {
            $io->error("User $email not found!");

            return Command::FAILURE;
        }

        try {
            $this->bus->dispatch(new ChangeClientUserPasswordMessage($email, $password));
            $io->success("Password changed for user $email.");
        } catch (HandlerFailedException $exception) {
            $io->error($exception->getMessage());

            switch (get_class($exception->getPrevious())) {
                case ValidationFailedException::class:
                    $io->error($exception->getPrevious()->getViolations());
                    break;
            }

            return Command::FAILURE;
        }

        return Command::SUCCESS;
    }
}

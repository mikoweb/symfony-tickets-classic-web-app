<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Repository;

use App\Entity\Admin;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Admin|null find($id, $lockMode = null, $lockVersion = null)
 * @method Admin|null findOneBy(array $criteria, array $orderBy = null)
 * @method Admin[]    findAll()
 * @method Admin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdminRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Admin::class);
    }

    public function findAdmin(string $email): ?Admin
    {
        return $this->findOneBy([
            'email' => $email,
        ]);
    }

    public function isAdminExists(string $email): bool
    {
        return !is_null($this->findAdmin($email));
    }

    public function getFirstAdmin(): ?Admin
    {
        $admins = $this->createQueryBuilder('a')
            ->setMaxResults(1)
            ->getQuery()
            ->getResult()
        ;

        return $admins[0] ?? null;
    }
}

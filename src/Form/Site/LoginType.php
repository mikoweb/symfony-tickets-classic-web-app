<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Form\Site;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class LoginType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'site.forms.login.email',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Email(),
                ]
            ])
            ->add('password', PasswordType::class, [
                'label' => 'site.forms.login.password',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'csrf_protection' => false,
        ]);
    }
}

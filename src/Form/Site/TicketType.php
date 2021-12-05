<?php
/*
 * Copyright (c) Rafał Mikołajun 2021.
 */

namespace App\Form\Site;

use App\Entity\Ticket;
use App\Entity\TicketTopic;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Contracts\Translation\TranslatorInterface;

class TicketType extends AbstractType
{
    private TranslatorInterface $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('topic', EntityType::class, [
                'required' => true,
                'label' => 'site.forms.ticket.topic',
                'class' => TicketTopic::class,
                'choice_label' => 'name',
            ])
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'site.forms.ticket.title',
            ])
            ->add('email', EmailType::class, [
                'required' => true,
                'label' => 'site.forms.ticket.email',
            ])
            ->add('text', TextareaType::class, [
                'required' => true,
                'label' => 'site.forms.ticket.text',
            ])
            ->add('file', FileType::class, [
                'mapped' => false,
                'required' => false,
                'label' => 'site.forms.ticket.file',
                'attr' => [
                    'accept' => implode(',', $options['file_mime_types']),
                ],
                'constraints' => [
                    new Assert\File([
                        'maxSize' => '1024k',
                        'mimeTypes' => $options['file_mime_types'],
                        'mimeTypesMessage' => $this->translator->trans('site.forms.ticket.invalid_file'),
                    ]),
                ],
            ])
            ->add('send', SubmitType::class, [
                'label' => 'site.forms.ticket.send',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Ticket::class,
            'file_mime_types' => [
                'application/pdf',
                'application/x-pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.oasis.opendocument.text',
                'image/jpeg',
                'image/png',
            ],
        ]);
    }
}

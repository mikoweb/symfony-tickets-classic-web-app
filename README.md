# Symfony Tickets Classic Web App

Classic web application written in Symfony 6. Ticket management application with an admin panel.

## env options (.env.local)

    APP_ENV
    APP_ITEMS_PER_PAGE
    DATABASE_URL
    MESSENGER_TRANSPORT_DSN
    MAILER_DSN

## Install

    php8.1 composer.phar install
    php8.1 bin/console doctrine:database:create
    php8.1 bin/console doctrine:schema:update --force
    php8.1 bin/console doctrine:fixtures:load --append --group=users
    php8.1 bin/console doctrine:fixtures:load --append --group=ticket_topics

### Create Apache Virtual Host

Create file `/etc/apache2/sites-available/001-symfony-tickets.conf`:

```apacheconf
<VirtualHost symfony-tickets.dev:80>
	DocumentRoot /home/[username]/Projects/SymfonyTicketsClassicWebApp/public
   	ServerName symfony-tickets.dev

	Include /etc/apache2/conf-available/php8.1-fpm.conf

    <Directory /home/[username]/Projects/SymfonyTicketsClassicWebApp/public/>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride all
        Require all granted
        Order deny,allow
        deny from all
        allow from 127.0.0.1
    </Directory>
</VirtualHost>
```

Add this to `/etc/hosts`:

```
127.0.0.1 symfony-tickets.dev
```

Enable virtual host:

    sudo a2ensite 001-symfony-tickets.conf

Restart apache:

    sudo systemctl restart apache2

## Commands

### Create Client User

    php8.1 bin/console app:user:create user1@local.dev user1

### Change password for Client User

    php8.1 bin/console app:user:change-password user1@local.dev newpassword

### Create Admin

    php8.1 bin/console app:admin:create admin@local.dev admin

### Change password for Admin

    php8.1 bin/console app:admin:change-password admin@local.dev newpassword

## Mailer

Set `MAILER_DSN` on file `.env.local`:

    MAILER_DSN=smtp://user:pass@smtp.symfony-tickets.dev:25

In this project, emails are sent asynchronously. You need to set `MESSENGER_TRANSPORT_DSN` to work with RabbitMQ.

    MESSENGER_TRANSPORT_DSN=amqp://guest:guest@localhost:5672/%2f/symfony_tickets_messages

To send emails you need:

    php8.1 bin/console messenger:consume async

You can also [Supervisor Configuration](https://symfony.com/doc/current/messenger.html#supervisor-configuration).

### RabbitMQ Install

* https://computingforgeeks.com/how-to-install-latest-rabbitmq-server-on-ubuntu-linux/

```
sudo apt install erlang
sudo apt install rabbitmq-server
sudo rabbitmq-plugins enable rabbitmq_management
```

Web panel: `http://(server IP|Hostname):15672` - login: guest; password: guest;

## Routes

```
 -------------------------- ---------- -------- ------ ----------------------------------- 
  Name                       Method     Scheme   Host   Path                               
 -------------------------- ---------- -------- ------ -----------------------------------         
  app_site_index             GET        ANY      ANY    /                                  
  app_site_login             GET|POST   ANY      ANY    /login                             
  app_site_logout            GET        ANY      ANY    /logout                            
  app_site_ticket_index      GET        ANY      ANY    /ticket/                           
  app_site_ticket_create     GET|POST   ANY      ANY    /ticket/create                     
  app_admin_index            GET        ANY      ANY    /admin/                            
  app_admin_login            GET|POST   ANY      ANY    /admin/login                       
  app_admin_logout           GET        ANY      ANY    /admin/logout                      
  app_admin_ticket_index     GET        ANY      ANY    /admin/ticket/                     
  app_admin_ticket_show      GET        ANY      ANY    /admin/ticket/show/{slug}          
 -------------------------- ---------- -------- ------ ----------------------------------- 
 ```

## TODO

* Front-end
* Unit Tests

## Copyrights

Copyright (c) Rafał Mikołajun 2021.

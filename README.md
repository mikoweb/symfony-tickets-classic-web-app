# Symfony Tickets Classic Web App

Classic web application written in Symfony 6. Ticket management application with an admin panel.

## env options (.env.local)

    APP_ENV
    DATABASE_URL

## Install

    php8.1 composer.phar install
    php8.1 bin/console doctrine:database:create
    php8.1 bin/console doctrine:schema:update --force
    php8.1 bin/console doctrine:fixtures:load --append --group=users

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

FROM php:8.1.7RC1-apache AS web
COPY src /var/www/html
COPY custom.ini /usr/local/etc/php/conf.d/
RUN chown www-data:www-data -R /var/www/html
RUN a2enmod rewrite
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli


FROM mysql:8.0.29 AS db
COPY schema.sql /docker-entrypoint-initdb.d/schema.sql

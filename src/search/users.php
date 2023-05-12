<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'GET')
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/search/users/.get.php';
elseif ($_SERVER['REQUEST_METHOD'] == 'POST')
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/search/users/.post.php';
else
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/405.php';

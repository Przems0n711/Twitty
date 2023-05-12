<?php
session_start();

if (!isset($_SESSION['username']))
    header('Location: /account/login');

if ($_SERVER['REQUEST_METHOD'] == 'POST')
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/group/edit/.post.php';
else
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/405.php';

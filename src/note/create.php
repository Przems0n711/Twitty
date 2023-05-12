<?php
session_start();

if (!isset($_SESSION['username'])) {
    http_response_code(303);
    header('Location: /account/login');
}

if ($_SERVER['REQUEST_METHOD'] == 'GET')
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/note/create/.get.php';
elseif ($_SERVER['REQUEST_METHOD'] == 'POST')
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/note/create/.post.php';
else
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/405.php';

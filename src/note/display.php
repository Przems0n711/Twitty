<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: /account/login', true, 303);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET')
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/note/display/.get.php';
else
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/405.php';

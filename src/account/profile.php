<?php
session_start();

if (!isset($_SESSION['username']))
    header('Location: /account/login', true, 303);

require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

$user_id = "'" . $_SESSION['id'] . "'";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($conn->query("SELECT * FROM Users_profiles WHERE user_id = $user_id")->num_rows == 0)
        require $_SERVER['DOCUMENT_ROOT'] . '/resources/account/profile/.create_get.php';
    else
        require $_SERVER['DOCUMENT_ROOT'] . '/resources/account/profile/.get.php';
} else
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/405.php';

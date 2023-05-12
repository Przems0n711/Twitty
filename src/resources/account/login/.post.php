<?php
session_start();
include $_SERVER['DOCUMENT_ROOT']  . '/resources/.mysqli.php';

$email = $_POST['email'];
$password = $_POST['password'];
$query = $conn->query('SELECT * FROM Users WHERE email = UNHEX(\'' . bin2hex($email) . '\')')->fetch_array();

$hash = $query['password'];

if (password_verify($password, $hash)) {
    $_SESSION['id'] = $query['id'];
    $_SESSION['username'] = $query['username'];
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $hash;

    http_response_code(303);
    header('Location: /');
} else {
    header('Refresh: 3');
    die('<h1>Incorrect username or password</h1>');
}

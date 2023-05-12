<?php
require $_SERVER['DOCUMENT_ROOT']  . '/resources/.mysqli.php';

if (preg_match("/[^-\w]/", $_POST['username'])) {
    header('Refresh: 3');
    die('<h1>This username contains illegal chars</h1>');
}
if (!$_POST['username'] || !$_POST['email'] || !$_POST['password']) {
    header('Refresh: 3');
    die('<h1>None of the fields can be empty</h1>');
}

$username = "'" . bin2hex($_POST['username']) . "'";
$email = "'" . bin2hex($_POST['email']) . "'";
$password = "'" . bin2hex(password_hash($_POST['password'], PASSWORD_DEFAULT)) . "'";

if ($conn->query("SELECT * FROM Users WHERE username = UNHEX($username)")->num_rows != 0) {
    header('Refresh: 3');
    die('<h1>This username has already been taken</h1>');
}
if ($conn->query("SELECT * FROM Users WHERE email = UNHEX($email)")->num_rows != 0) {
    header('Refresh: 3');
    die('<h1>This email has already been taken</h1>');
}

$conn->query("INSERT INTO Users (username, email, password) VALUES (UNHEX($username), UNHEX($email), UNHEX($password))");
$conn->commit();

header('Refresh: 3; url=/account/login', true, 303);
echo 'Registration successful!';

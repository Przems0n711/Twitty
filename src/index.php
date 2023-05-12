<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/resources/css/reset.css">
    <link rel="stylesheet" href="/resources/css/style.css">
    <link rel="stylesheet" href="/resources/css/index.css">
    <title>Twitty</title>
</head>
<body>
<?php
if (isset($_SESSION['username'])) {
    echo "<h1>Hello {$_SESSION['username']}.</h1>";
    echo '<a href=/account/logout>Logout</a><br>';
    echo '<a href=/note/create>Create note</a><br>';
    echo '<a href=/note/list>List notes</a><br>';
    echo '<a href=/group/create>Create group</a><br>';
    echo '<a href=/group/list>List groups</a><br>';
    echo '<a href=/account/profile>Profile</a><br>';
    echo '<a href="/search/users">Search Users</a><br>';
} else {
    echo '<a href=/account/login>Login</a><br>';
    echo '<a href=/account/register>Register</a>';
}
?>
</body>
</html>
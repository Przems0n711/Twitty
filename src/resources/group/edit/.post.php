<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

$group_owner_id = $conn->query("SELECT owner_id FROM `Groups` WHERE id = {$_POST['group_id']}")->fetch_array()['owner_id'];

if ($group_owner_id != $_SESSION['id'])
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/403.php';

if ($_POST['action_type'] == 'add_user') {
    $username = "'" . $_POST['username'] . "'";
    $user = $conn->query("SELECT * FROM Users WHERE username = $username");

    $group_name = $conn->query("SELECT name FROM `Groups` WHERE id = {$_POST['group_id']}")->fetch_array()['name'];

    if ($user->num_rows == 0) {
        header("Refresh: 3; url=/group/view?id={$_POST['group_id']}&name=$group_name");
        die('<h1 style="text-align: center">User does not exist</h1>');
    }

    $group_id = $_POST['group_id'];
    $user_id = $conn->query("SELECT id FROM Users WHERE username = $username")->fetch_array()['id'];

    $conn->query("INSERT INTO Users_Groups (group_id, user_id) VALUES ($group_id, $user_id)");
    $conn->commit();

    header("Location: /group/view?id=$group_id&name=$group_name");
}

<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

if (preg_match("/[^-\w]/", $_POST['name'])) {
    header('Refresh: 3');
    die('<h1>This group name contains illegal chars</h1>');
}

$group_name = "'" . bin2hex($_POST['name']) . "'";

if ($conn->query("SELECT * FROM `Groups` WHERE name = UNHEX($group_name)")->num_rows != 0) {
    header('Refresh: 3');
    die('<h1>This group already exists</h1>');
}
$conn->query("INSERT INTO `Groups` (owner_id, name) VALUES ({$_SESSION['id']}, UNHEX($group_name))");

$group_id = $conn->query("SELECT id FROM `Groups` WHERE name = UNHEX($group_name)")->fetch_array()['id'];
$conn->query("INSERT INTO Users_Groups (group_id, user_id) VALUES ($group_id, {$_SESSION['id']})");
$conn->commit();

header('Location: /group/list', true, 303);

<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';
$user_id = "'" . $_SESSION['id'] . "'";
$user_groups_query = $conn->query("SELECT group_id FROM Users_Groups WHERE user_id = $user_id");

$user_groups = "'";
while ($id = $user_groups_query->fetch_assoc()['group_id']) {
    $user_groups .= $id . ',';
}

$user_groups .= "'";

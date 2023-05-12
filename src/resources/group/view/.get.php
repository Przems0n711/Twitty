<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="src/resources/group/view/view.scss">
    <title>Twitty - view group</title>
</head>
<body>
<ul>
    <ul>Users:</ul>
    <?php
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

    $group_id = "'" . $_GET['id'] . "'";
    $group_name = "'" . $_GET['name'] . "'";
    $group = $conn->query("SELECT * FROM `Groups` WHERE id = $group_id AND name = $group_name");

    if ($group->num_rows == 0)
        die('<h1 style="text-align: center">This group does not exist</h1>');
    if ($conn->query("SELECT * FROM Users_Groups WHERE group_id = {$group->fetch_array()['id']} AND user_id = {$_SESSION['id']}")
            ->num_rows == 0) {
        die('<h1 style="text-align: center">This group does not exist</h1>');
    }

    $group_owner_id = $conn->query("SELECT owner_id FROM `Groups` WHERE id = $group_id")->fetch_array()['owner_id'];
    $group_users_id = $conn->query("SELECT user_id FROM Users_Groups WHERE group_id = $group_id");
    while ($user_id = $group_users_id->fetch_assoc()['user_id']) {
        $username = $conn->query("SELECT username FROM Users WHERE id = $user_id")->fetch_array()['username'];
        if ($user_id == $group_owner_id)
            echo "<li><b>Owner: </b>$username</li>";
        else
            echo "<li>$username</li>";
    }
    ?>
</ul>
<?php
if ($user_id = $group_owner_id)
    echo '<form action="/group/edit" method="post">
    <p>Add user:</p>
    <input name="username" placeholder="username" type="text">
    <input name="action_type" type="hidden" value="add_user">
    <input name="group_id" type="hidden" value="' . $_GET['id'] . '">
    <input type="submit" placeholder="Add user">
</form>'
?>
</body>
</html>
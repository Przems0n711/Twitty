<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="src/resources/note/list/list.scss">
    <title>Twitty - list notes</title>
</head>
<body>
<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/account/.get_user_groups.php';
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

$query = $conn->query("SELECT * FROM Notes");

$user_id = "'" . $_SESSION['id'] . "'";

$notes = $conn->query("SELECT * FROM Notes WHERE user_id = $user_id OR FIND_IN_SET(group_id, $user_groups)");

while ($note = $notes->fetch_assoc()) {
    echo '<a href="/note/display?note_id=' . $note['id'] . '&note_name=' . $note['name'] . '">' . $note['name'] . '</a><br>';
}
echo '<a href="/">Home</a>';
?>
</body>
</html>
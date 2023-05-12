<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php echo 'twitty ' . $_GET['note_name'] ?></title>
</head>
<body>
<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/libs/Parsedown.php';
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';
require $_SERVER['DOCUMENT_ROOT'] . '/resources/account/.get_user_groups.php';

$user_id = $_SESSION['id'];
$note_id = $_GET['note_id'];

$notes = $conn->prepare("SELECT * FROM Notes WHERE id = ? AND (user_id = ? OR FIND_IN_SET(group_id, ?))");
$notes->execute($note_id, $user_id, $user_groups);

if ($notes->num_rows == 0)
    require $_SERVER['DOCUMENT_ROOT'] . '/src/resources/http_codes/404.php';
else
    echo Parsedown::instance()
        ->setSafeMode(true)
        ->parse(file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/note/raw/' . $_GET['note_id'] . '-' . $_GET['note_name']));
?>
</body>
</html>
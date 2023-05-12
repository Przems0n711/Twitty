<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

if (preg_match("/[^-\w]/", $_POST['name'])) {
    header('Refresh: 3');
    die('<h1>This post name contains illegal chars</h1>');
}

$subject_hex = bin2hex($_POST['subject']);
$subject_query = $conn->query('SELECT * FROM Subjects WHERE name = UNHEX(\'' . $subject_hex . '\')');
$notes_count = $conn->query('SELECT COUNT(*) FROM Notes')->fetch_array()[0];

if ($subject_query->num_rows == 0) {
    $conn->query('INSERT INTO Subjects (name) VALUES (UNHEX(\'' . $subject_hex . '\'))');
    $subject_query = $conn->query('SELECT * FROM Subjects WHERE name = UNHEX(\'' . $subject_hex . '\')');
}

$note_id = $notes_count + 1;
$subject_id = $subject_query->fetch_array()['id'];
$note_path = $_SERVER['DOCUMENT_ROOT'] . '/note/raw/' . $note_id . '-' . $_POST['name'];
$note_creation_date = date('Y-m-d H:i:s');

if ($_POST['group_name'] != '') {
    $group_name = "'" . bin2hex($_POST['group_name']) . "'";
    $group_id = $conn->query("SELECT id FROM `Groups` WHERE name = UNHEX($group_name)")->fetch_array()['id'];
}

if (!isset($group_id))
    $conn->query('INSERT INTO Notes (id, user_id, subject_id, name, path_to_content, creation_date) VALUES (
        \'' . $note_id . '\', \'' . $_SESSION['id'] . '\', \'' . $subject_id . '\', UNHEX(\'' . bin2hex($_POST['name']) . '\'), \''
        . $note_path . '\', \'' . $note_creation_date . '\')');
else
    $conn->query('INSERT INTO Notes (id, user_id, subject_id, group_id, name, path_to_content, creation_date) VALUES (
        \'' . $note_id . '\', \'' . $_SESSION['id'] . '\', \'' . $subject_id . '\', \'' . $group_id . '\', UNHEX(\'' . bin2hex($_POST['name']) . '\'), \''
        . $note_path . '\', \'' . $note_creation_date . '\')');

$note = fopen($note_path, 'w') or die('unable to create file');
fwrite($note, $_POST['content']);

$conn->commit();

http_response_code(303);
header('Location: /note/list');

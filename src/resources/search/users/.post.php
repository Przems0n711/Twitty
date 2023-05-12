<?php
require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

$query = $_POST['query'];

$result = $conn->prepare("SELECT * FROM Users_profiles WHERE FIND_IN_SET(user_id, 
    (SELECT GROUP_CONCAT(id) FROM Users WHERE username LIKE CONCAT('%', ?, '%')))");
$result->execute([$query]);

$result = $result->get_result();

while ($row = $result->fetch_assoc()) {
    $username = $conn->prepare('SELECT username FROM Users WHERE id = ?');
    $username->execute([$row['user_id']]);
    $username = $username->get_result()->fetch_array()['username'];
    echo '<img src="' . $row['avatar_path'] . '" alt="avatar" width="64" height="64" style="border-radius: 50%">
    <a href="/account/profile?username=' . $username . '">' . $row['name'] . ' ' . $row['surname'] . '</a>';
}

<?php

if ($_POST['action'] == 'private_to_public') {
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/.mysqli.php';

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $avatar_path = '/avatars/' . $_SESSION['username'];
    $user_id = $_SESSION['id'];

    if (@is_array(getimagesize($_FILES['avatar']['tmp_name'])))
        move_uploaded_file($_FILES['avatar']['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $avatar_path);
    else
        die('<h1 style="text-align: center">This file is not an image</h1>');

    $conn->prepare('INSERT INTO Users_profiles (user_id, name, surname, avatar_path) VALUES (?, ?, ?, ?)')
        ->execute([$user_id, $name, $surname, $avatar_path]);
    $conn->commit();

    header('Location: /account/profile', true, 303);
}

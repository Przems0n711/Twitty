<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/account/login/.get.php';
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require $_SERVER['DOCUMENT_ROOT'] . '/resources/account/login/.post.php';
} else {
    include $_SERVER['DOCUMENT_ROOT'] . '/resources/http_codes/405.php';
}

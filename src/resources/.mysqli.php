<?php
$conn = new mysqli($_ENV['MYSQL_HOST'], $_ENV['MYSQL_USER'], $_ENV['MYSQL_PASS']);
mysqli_select_db($conn, 'sqnote');
$conn->autocommit(false);

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Twitty - search users</title>
</head>
<body>
<form action="/search/users" method="post">
    <input name="query" placeholder="query" type="text">
    <input type="submit" placeholder="Search">
</form>
<?php
if (isset($search_results))
    echo $search_results;
?>
</body>
</html>
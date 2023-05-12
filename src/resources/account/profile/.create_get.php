<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Twitty - make profile public</title>
</head>
<body>
<form action="/account/edit" method="post" enctype="multipart/form-data"    >
    <input type="hidden" name="action" value="private_to_public" readonly>
    <input type="text" name="name" placeholder="name">
    <input type="text" name="surname" placeholder="surname">
    <input type="file" name="avatar" placeholder="avatar">
    <input type="submit" placeholder="Make account public">
</form>
</body>
</html>

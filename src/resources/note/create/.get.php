<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="src/resources/note/create/create.scss">
    <title>Create Post</title>
</head>
<body>
<form action="/note/create" method="post">
    <p>Type post name:</p>
    <textarea rows="100" cols="175" name="content"></textarea>
    <input type="text" placeholder="Name" name="name">
    <input type="text" placeholder="Subject" name="subject">
    <input type="text" placeholder="Group (leave empty if none)" name="group_name">
    <input type="submit" placeholder="Submit">
</form>
</body>
</html>

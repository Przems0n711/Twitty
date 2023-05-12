<?php
session_start();
session_destroy();
session_unset();

session_start();
session_regenerate_id();

http_response_code(303);
header('Location: /');

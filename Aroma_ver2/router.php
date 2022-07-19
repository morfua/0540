<?php

$url = explode("/", $_SERVER['REQUEST_URI']);


if ($url[1] == auth) {
  $content = file_get_contents("pages/login.html");
} else if ($url[1] == reg) {
  $content = file_get_contents("pages/register.html");
} else if ($url[1] == blog) {
  $content = file_get_contents("pages/blog.html");
} else if ($url[1] == contact) {
  $content = file_get_contents("pages/contact.php");
} else {
  $content = file_get_contents("pages/index.php");
}
require_once("template.php");

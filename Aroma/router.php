<?php

$url = explode("/", $_SERVER['REQUEST_URI']);

if ($url[1] == blog) {
  require_once("blog.html");
}else if ($url[1] == contact) {
  require_once("contact.php");
}

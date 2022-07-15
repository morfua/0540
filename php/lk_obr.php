<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "oefnbvtr_0540", "12345", "oefnbvtr_0540");
if ($mysqli == false) {
  print("error");
} else {
  $inputValue = $_POST["value"];//Новое значение поля инпут (или имя или фамилия)
  $item = $_POST["item"]; //Определяем какое поле меняем
  $id = $_SESSION["id"]; //Опеределяем у какого пользователя меняем

  $mysqli->query("UPDATE `users` SET `$item`='$inputValue' WHERE `id`='$id'");
}

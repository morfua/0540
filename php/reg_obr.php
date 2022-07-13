<?php
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "oefnbvtr_0540", "12345", "oefnbvtr_0540");
if ($mysqli == false) {
  print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
  print("Соединение установлено успешно");
}


$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$pass = $_POST['pass'];
echo "<hr>";
echo "Имя: $name<br>
Фамилия: $lastname<br>
E-mail: $email<br>
Пароль: $pass";
?>

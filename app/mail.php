php:
<?php

$recepient = "zaharova181114@gmail.com"; //почту ставить свою
$sitename = "Айвер - очистка воды для предприятий в Томске и области";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $message";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
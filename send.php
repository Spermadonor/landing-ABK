<?php
$p = $_POST;
if( isset($p[name]) ){
    $name = htmlspecialchars($p['name']);
    $tel = htmlspecialchars($p['tel']);
    $email = htmlspecialchars($p['email']);
    $send = "<h1>Звявка с сайта.</h1><h2>Данные пользователя:</h2><b>Имя</b>: $name; <br><b>Телефон</b>: $tel;<br><b>Почта</b>: $email";
    $to= "admin@arkland.ru";
    $subject="ЗАЯВКА";

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Landing-AKB<mail@landing-AKB.ru>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 
  mail($to, $subject, $send, $headers);
 }
?>
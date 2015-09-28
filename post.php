<?php
 
$verify = mail ("gtstyleshop@gmail.com","название сайта","С сайта было получено:\nКоментировали :$_POST[textarea]","Content-type:text/plain; charset=utf-8\r\nFrom:$email");
if($verify)
{
    header("Location: gtstyleshop@gmail.com ");
    exit;
}
else
    echo 'Произошла ошибка при отправке письма.';
?>
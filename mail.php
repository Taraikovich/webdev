<?
if(isset($_POST['user_name']) && ($_POST['user_name'] != '') && isset($_POST['user_phone']) && ($_POST['user_phone'] != '')){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'master125by@yandex.by'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заказ 125.by'; //Загаловок сообщения
        $name = CheckData($_POST['user_name']);
        $phone = CheckData($_POST['user_phone']);
        $user_message = '';
        if (isset($_POST['user_problem']) && ($_POST['user_problem'] != '')) $user_message = CheckData($_POST['user_problem']);
        elseif (isset($_POST['user_message']) && ($_POST['user_message'] != '')) $user_message = CheckData($_POST['user_message']);
        else $user_message = "Перезвоните мне!";
        $message = "
                <html>
                    <head>
                        <title>$subject</title>
                    </head>
                    <body>
                        <p>Имя: $name</p>
                        <p>Телефон: $phone</p>
                        <p>$user_message</p> 
                    </body>
                </html>"; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        // $headers .= "From: Отправитель <@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}

function CheckData($data){
  $data = trim(strip_tags(stripcslashes(htmlspecialchars($data))));//Делаем безопасными данные, переданные пользователем
  return $data;
}
?>
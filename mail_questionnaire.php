<?
if(isset($_POST['name']) && ($_POST['name'] != '') && isset($_POST['phone']) && ($_POST['phone'] != '') && isset($_POST['age']) && ($_POST['age'] != '') && isset($_POST['addr']) && ($_POST['addr'] != '') && isset($_POST['exp']) && ($_POST['exp'] != '') && isset($_POST['time']) && ($_POST['time'] != '') && isset($_POST['auto']) && ($_POST['auto'] != '') && isset($_POST['smoking']) && ($_POST['smoking'] != '') && isset($_POST['jail']) && ($_POST['jail'] != '') && isset($_POST['other']) && ($_POST['other'] != '')){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = '375255026997@yandex.by'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Резюме'; //Загаловок сообщения
        $name = CheckData($_POST['name']);
        $phone = CheckData($_POST['phone']);
        $age = CheckData($_POST['age']);
        $addr = CheckData($_POST['addr']);
        $exp = CheckData($_POST['exp']);
        $time = CheckData($_POST['time']);
        $auto = CheckData($_POST['auto']);
        $smoking = CheckData($_POST['smoking']);
        $jail = CheckData($_POST['jail']);
        $other = CheckData($_POST['other']);
        
        $message = "
                <html>
                    <head>
                        <title>$subject</title>
                    </head>
                    <body>
                        <p>ФИО: $name</p>
                        <p>Возраст: $age</p>
                        <p>Опыт работы: $exp</p>
                        <p>Авто: $auto</p>
                        <p>Вредные привычки: $smoking</p>
                        <p>Судимость: $jail</p>
                        <p>Желаемый график работы: $time</p>
                        <p>Адрес проживания: $addr</p>
                        <p>Телефон: $phone</p>
                        <p>Прочее: $other</p> 
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
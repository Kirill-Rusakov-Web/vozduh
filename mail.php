<?php

if(!empty(trim($_POST['name'])) && !empty(trim($_POST['phone'])) && !empty(trim($_POST['email']))){
    $project_name = " info@vozduh.lv";
    $admin_email = " info@vozduh.lv";
    $email_from = $_POST['email'];

    $message = "Cообщение с сайта 'Vozduh.lv': \n" . 
                "\n" .
            "Отправлено с формы: " . trim($_POST['form_id']) . "\n" . 
            "\n" .    
            "Имя отправителя: " . trim($_POST['name']) . "\n" . 
            "\n" .
            "Телефон отправителя: " . trim($_POST['phone']) . "\n" . 
            "\n" .
            "Почта отправителя: " . trim($_POST['email']) . "\n";


    $form_subject = 'Сообщение с сайта Vozduh';

    // Preparing header
    $headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: <'.$email_from.'>' . PHP_EOL .
    'Reply-To: '.$admin_email.'' . PHP_EOL;

    // Sending email to admin
    $result = mail($admin_email, $form_subject, $message, $headers);

    if($result){
        $response = [
            'status' => true,
            'message' => 'OK!'
        ];
        echo json_encode($response);
    }else{
        $response = [
            'status' => false,
            'message' => 'ERROR!'
        ];
        echo json_encode($response);
    };
};

?>
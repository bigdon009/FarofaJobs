<?php

if (!empty($_POST)) {

    if (
            trim($_POST['name'])==""||
            trim($_POST['email'])==""||
            trim($_POST['salary'])==""||
            trim($_POST['description'])==""
    ) {
        die("{\"success\":false,\"reason\":\"Preencha todos os campos obrigatórios\",\"code\":1}");
    }

    $to="contato@farofastudios.com.br";
    $subject="Contato FarofaJobs: ";
    $attachments="";
    $body="Mensagem enviada através do formulário de jobs do site da Farofa:\n";
    $body=$body . "\nNome: " . $_POST['name'];
    $body=$body . "\nEmail: " . $_POST['email'];
    $body=$body . "\nPortfolio: " . $_POST['link'];
    $body=$body . "\nPretensão Salarial: " . $_POST['salary'];
    $body=$body . "\nLinkedin: " . $_POST['linkedin'];
    $body=$body . "\nDescrição: " . $_POST['description'];

    move_uploaded_file($_FILES["cv"]["tmp_name"],WP_CONTENT_DIR . '/uploads/' . basename($_FILES['cv']['name']));
    $attachments=array(WP_CONTENT_DIR . "/uploads/" . $_FILES["cv"]["name"]);

    global $phpmailer;

    // Make sure the PHPMailer class has been instantiated
    // (copied verbatim from wp-includes/pluggable.php)
    // (Re)create it, if it's gone missing
    if (!is_object($phpmailer)||!is_a($phpmailer,'PHPMailer')) {
        require_once ABSPATH . WPINC . '/class-phpmailer.php';
        require_once ABSPATH . WPINC . '/class-smtp.php';
        $phpmailer=new PHPMailer();
    }

    $phpmailer->SMTPDebug=2;
    ob_start();
    $success=wp_mail($to,$subject,$body,"",$attachments);
    $smtp_debug=ob_get_clean();

    /* echo var_dump($success);
      echo var_dump($phpmailer);
      echo $smtp_debug; */

    if (count($attachments)>0&&trim($attachments[0])!="") {
        @unlink($attachments[0]);
    }

    die("{'success':true}");
}
<?php

require 'PHPMailerAutoload.php';

$mail=new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host='smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth=true;                               // Enable SMTP authentication
$mail->Username='contato@farofastudios.com.br';                 // SMTP username
$mail->Password='farofa66';                           // SMTP password
$mail->SMTPSecure='tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port=587;                                    // TCP port to connect to
$mail->isHTML(false);
$mail->From='contato@farofastudios.com.br';
$mail->FromName='Contato FarofaJobs';
$mail->addAddress('contato@farofastudios.com.br');
$mail->Subject="Contato FarofaJobs";


$nameFrom=trim($_POST['name']);
$emailFrom=trim($_POST['email']);
$salary=trim($_POST['salary']);
$msg=trim($_POST['description']);
$link=trim($_POST['link']);
$linkedIn=trim($_POST['linkedin']);

//$nameFrom='Thiago';
//$emailFrom='thiago@farofastudios.com.br';
//$salary='100000000';
//$msg='lorem ipsum';
//$link='dhjfbvdfhj';
//$linkedIn='vlidufviudsnbiufdshni';

if (!empty($_POST)) {

    if (
            $nameFrom==""||
            $emailFrom==""||
            $salary==""||
            $msg==""
    ) {
        die("{\"success\":false,\"reason\":\"Preencha todos os campos obrigatórios\",\"code\":1}");
    }

    $mail->Subject .= " : ".$_POST['jobname'];

    $mail->Body="Mensagem enviada através do formulário de jobs do site da Farofa:\r\n" .
            "Nome: " . $nameFrom . "\r\n" .
            "Email: " . $emailFrom . "\r\n" .
            "Portfolio: " . $link . "\r\n" .
            "Pretensão Salarial: " . $salary . "\r\n" .
            "Linkedin: " . $linkedIn . "\r\n" .
            "Descrição: " . $msg;
    //$body = $mail->Body;

    if ($_FILES['cv']['size']>0) {

        move_uploaded_file($_FILES['cv']['tmp_name'],'uploads/' . basename($_FILES['cv']['name']));
        $attachments=array('uploads/' . $_FILES['cv']['name']);
        $filename=$_FILES['cv']['name'];
        $file=$attachments[0];
        $file_size=filesize($file);
//        $handle=fopen($file,'r');
//        $content=fread($handle,$file_size);
//        fclose($handle);
//        $content .= chunk_split(base64_encode($content));
        $mail->addAttachment($file,$filename);

        //$separator=md5(time());
//
        //$eol=PHP_EOL;
        //$headers="From: Contato <contato@farofastudios.com.br>" . $eol;
        //$headers="From: Contato <contato@farofastudios.com.br>";
//        $headers .= "MIME-Version: 1.0" . $eol;
//        $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
//        $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
//        $headers .= "This is a MIME encoded message." . $eol;
//
//        $headers .= "--" . $separator . $eol;
//        $headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
//        $headers .= "Content-Transfer-Encoding: 8bit" . $eol . $eol;
//        $headers .= $body . $eol . $eol;
//
//        $headers .= "--" . $separator . $eol;
//        $headers .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
//        $headers .= "Content-Transfer-Encoding: base64" . $eol;
//        $headers .= "Content-Disposition: attachment" . $eol . $eol;
//        $headers .= $content . $eol . $eol;
//        $headers .= "--" . $separator . "--";
//
        //$headers .= processHeaders($headers);

        if (!$mail->send()) {
            @unlink($attachments[0]);
            die("{\"success\":false, \"reason\":\"". $mail->ErrorInfo ."\"} ");
        } else {
            @unlink($attachments[0]);
            die("{\"success\":true}");
        }
    }

    if (!$mail->send()) {
        die("{\"success\":false, \"reason\":\"". $mail->ErrorInfo ."\"} ");
    } else {
        die("{\"success\":true,\"reason\":\"Email enviado\"}");
    }
}

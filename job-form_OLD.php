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

    $to="lucas@farofastudios.com.br";
    $subject="Contato FarofaJobs: ";
    $attachments="";
    $body="Mensagem enviada através do formulário de jobs do site da Farofa:\n";
    $body=$body . "\nNome: " . $_POST['name'];
    $body=$body . "\nEmail: " . $_POST['email'];
    $body=$body . "\nPortfolio: " . $_POST['link'];
    $body=$body . "\nPretensão Salarial: " . $_POST['salary'];
    $body=$body . "\nLinkedin: " . $_POST['linkedin'];
    $body=$body . "\nDescrição: " . $_POST['description'];

	if($_FILES['cv']["size"] > 0) {
	
	    move_uploaded_file($_FILES["cv"]["tmp_name"],'uploads/' . basename($_FILES['cv']['name']));
	    $attachments=array("uploads/" . $_FILES["cv"]["name"]);
	
		$filename = $_FILES["cv"]["name"];
		$file = $attachments[0];
		$file_size = filesize($file);
		$handle = fopen($file,"r");
		$content = fread($handle, $file_size);
		fclose($handle);
		$content = chunk_split(base64_encode($content));
		
		$separator = md5(time());
		
		$eol = PHP_EOL;
		
		$headers = "From: Contato <contato@farofastudios.com.br>" . $eol;
	    $headers .= "MIME-Version: 1.0" . $eol;
	    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol . $eol;
	    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
	    $headers .= "This is a MIME encoded message." . $eol . $eol;
		
		$headers .= "--" . $separator . $eol;
	    $headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
	    $headers .= "Content-Transfer-Encoding: 8bit" . $eol . $eol;
	    $headers .= $body . $eol . $eol;
		
		$headers .= "--" . $separator . $eol;
	    $headers .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
	    $headers .= "Content-Transfer-Encoding: base64" . $eol;
	    $headers .= "Content-Disposition: attachment" . $eol . $eol;
	    $headers .= $content . $eol . $eol;
	    $headers .= "--" . $separator . "--";
		
		if (mail($to, $subject, "", $headers)) {
	        die("{\"success\":true}");
	    } else {
	        die("{\"success\":false}");
	    }
			
        @unlink($attachments[0]);
    }

	if (mail($to, $subject, $body)) {
        die("{\"success\":true}");
    } else {
        die("{\"success\":false}");
    }
	
}
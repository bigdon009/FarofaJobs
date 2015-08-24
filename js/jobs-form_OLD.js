function sendMail() {
	var data = new FormData($("form")[0]);
	data.append("action","send_mail");
	
	$("form div#submit").hide();
	
	$("#emailResult")
		.text("Enviando seus dados...")
		.removeClass("error")
		.removeClass("success");
	
	$.ajax({
		method:"POST",
		url:"job-form.php",
		dataType:"json",
		processData: false,
		contentType: false,
		data:data,
		success:function(data, textStatus, jqXHR) {
			console.log("success",data);
			
			if(data.success == true) {
				$("#emailResult")
					.text("Email enviado com sucesso.")
					.removeClass("error")
					.removeClass("success")
					.addClass("success");
			}
			else {
				$("#emailResult")
					.text(data.reason)
					.removeClass("error")
					.removeClass("success")
					.addClass("error");
			}
			
			$("form div#submit").show();
		},
		error:function(jqXHR, textStatus, errorThrown)
		{
			console.log("error",jqXHR,textStatus,errorThrown);
			
			$("#emailResult")
					.text("Ocorreu um erro com o envio, por favor tente novamente.")
					.removeClass("error")
					.removeClass("success")
					.addClass("error");
			
			$("form div#submit").show();
		}
	});
}

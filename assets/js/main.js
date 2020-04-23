$(document).ready(function(){
	$("#custom_order_form").submit(function(){
		var cus_order_name = $("#custom_order_form .name");
		var cus_order_email = $("#custom_order_form .email");
		var cus_order_phone = $("#custom_order_form .phone");
		var cus_order_message = $("#custom_order_form .message");
		
		if(cus_order_name.val() == ""){
			alert("Your name's still empty");
			cus_order_name.focus();
			return false;
		}else if(cus_order_email.val() == ""){
			alert("Your email's still empty");
			cus_order_email.focus();
			return false;
		}else if(cus_order_phone.val() == ""){
			alert("Your phone's still empty");
			cus_order_phone.focus();
			return false;
		}else if(cus_order_message.val() == ""){
			alert("Your message's still empty");
			cus_order_message.focus();
			return false;
		}else{
			return true;
		}
	});
});
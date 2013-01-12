$(document).ready(function(){
	$('.budget').jcombox();
	
	var defaults = { 
		'name' : 'Enter your name..',
		'email' : 'Your e-mail address so I can reply..',
		'source' : 'Where did you find me?',
		'subject' : 'The subject of your message..',
		'message' : 'Your message..'
	};
	
	$("input[type=text], select, textarea").focus(function() {
		if (this.value == this.defaultValue)
		{
			this.value = "";
			return false;
		}
	});
	$("input, textarea").blur(function() {
		if (this.value == "")
		{
			this.value = this.defaultValue;
			return false;
		}
	});
	
	// Tweet Config
	$(".tweet").tweet({
		username: "kyee",
		join_text: "auto",
		avatar_size: 0,
		count: 1,
		auto_join_text_default: "I said,", 
		auto_join_text_ed: "I",
		auto_join_text_ing: "I was",
		auto_join_text_reply: "I replied to",
		auto_join_text_url: "I was checking out",
		loading_text: "loading tweets..."
	});
	
	$(".submit").click(function() {
		var name = $("input[name=name]").val();
		var email = $("input[name=email]").val();
		var source = $("input[name=source]").val();
		var subject = $("input[name=subject]").val();
		var message = $("textarea[name=message]").val();
		var budget = $("input[name=budget]").val();
	
		if (defaults['name'] == name || name == "") {
			$(".errors").fadeOut("fast", function () {
				$(".errors").text("You forgot to enter your name!");
			});
			$(".errors").fadeIn("fast");
			$("input[name=name]").val(defaults['name']).fadeIn();
			
			return false;
		}
		else if (defaults['email'] == email || email == "") {
			
			$(".errors").fadeOut("fast", function () {
				$(".errors").text("You forgot to enter your e-mail address!");
			});
			$(".errors").fadeIn("fast");
			$("input[name=email]").val(defaults['email']).fadeIn();
			
			return false;
		}
		else if (budget == "") {
			
			$(".errors").fadeOut("fast", function () {
				$(".errors").text("You forgot to enter your budget!");
			});
			$(".errors").fadeIn("fast");
			
			return false;
		}
		else if (defaults['subject'] == subject || subject == "") {
			
			$(".errors").fadeOut("fast", function () {
				$(".errors").text("You forgot to enter your subject!");
			});
			$(".errors").fadeIn("fast");
			$("input[name=subject]").val(defaults['subject']).fadeIn();
			
			return false;
		}
		else if (defaults['message'] == message || message == "") {
			
			$(".errors").fadeOut("fast", function () {
				$(".errors").text("You forgot to enter your message!");
			});
			$(".errors").fadeIn("fast");
			$("input[name=message]").val(defaults['message']).fadeIn();
			
			return false;
		}
		
		var dataString = 'name='+ name + '&email=' + email + '&source=' + source + '&subject=' + subject + '&budget=' + budget + '&message=' + message;
		//alert (dataString);return false;
		$(".errors").text("Please wait...").hide().fadeIn("fast");
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: dataString,
			success: function() {
				$('#contact form').html("");
				$('#contact form').append("<div id='success'><h3>Message sent!</h3><p>Thanks, I will be in touch soon.</p></div>");
			}
			
		});
		return false;
	});
});

document.addEventListener("DOMContentLoaded", function() {

	// for form
	var form = document.querySelector(".form");
	var formSubmit = document.querySelector(".form__submit");
	
	// check input mail
	function validateEmail(email) {
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}

	function validate() {
		var email = document.querySelector("input[type='email']");
		var emailVal = document.querySelector("input[type='email']").value;
		var password = document.querySelector("input[type='password']");
		var blockEmail = document.querySelector(".form__block-input_mail");
		var blockPassword = document.querySelector(".form__block-input_password");

		if(email && blockEmail && email.value != '' && validateEmail(emailVal)) {
			blockEmail.classList.remove("error");
			blockEmail.classList.add("success");
		} else if (blockEmail){
			blockEmail.classList.remove("success");
			blockEmail.classList.add("error");
		}

		if(password && blockPassword && password.value != '') {
			blockPassword.classList.remove("error");
			blockPassword.classList.add("success");
		} else if(blockPassword){
			blockPassword.classList.remove("success");
			blockPassword.classList.add("error");
		}

		return false;

	}
	if(formSubmit) {
		formSubmit.addEventListener('click', function (e) {
			e.preventDefault();
			validate();
		});
	}


		// form.addEventListener('submit', function(ev) {
	// 	var request = new XMLHttpRequest();
	// 	request.open('POST', url);
	// 	request.onreadystatechange = function () {
	// 		if(request.readyState === 4 && request.status === 200) {
	// 			callback(request.responseText);
	// 		}
	// 	}
	// 	request.send(new FormData(form));
	// 	ev.preventDefault();
	// }, false);

		// var reset = document.getElementById('reset');
	// var content = document.getElementById('content');
	// reset.addEventListener("click", function () {
	// 	ajaxGET('./forgot.html', function (data) {
	// 		content.innerHTML = data;
	// 	});
	// });

	// function ajaxGET(url, callback) {
	// 	var request = new XMLHttpRequest();
	// 	request.open('GET', url);
	// 	request.onreadystatechange = function () {
	// 		if(request.readyState === 4 && request.status === 200) {
	// 			callback(request.responseText);
	// 		}
	// 	}
	// 	request.send(null);
	// }
	

});





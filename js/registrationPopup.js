/*Форма регистрации*/
let registrationForm = document.querySelector(".registration-form");

/*Кнопка Регистрация*/
let registrationLink = document.querySelector(".registration-link");

registrationLink.onclick = () => {
	registrationForm.style.display = "block";
}

/*Крестик закрытия формы регистрации*/
let registrationCross = document.querySelector(".registration-cross");

registrationCross.onclick = () => {
	registrationForm.style.display = "none";
}

/*--------------------------------VALID---------------------------------------------*/
/*Имя*/
let registrationName = document.querySelector(".registration-name");
/*Фамилия*/
let registrationSurname = document.querySelector(".registration-surname");
/*Почта*/
let registrationMail = document.querySelector(".registration-mail");
/*Пароль*/
let registrationPassword = document.querySelector(".registration-password");

/*Регулярные выражения*/
let russian_letters_reg = /[а-я]/i;
let mail_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
let password_reg = /[A-Za-z0-9]/;

registrationName.onchange = () => {
	if(!russian_letters_reg.test(registrationName.value)) {
		alert("Неправильно");
	} else {
		alert("Правильно");
	}
}

registrationSurname.onchange = () => {
	if(!russian_letters_reg.test(registrationSurname.value)) {
		alert("Неправильно");
	} else {
		alert("Правильно");
	}
}

registrationMail.onchange = () => {
	if(!mail_reg.test(registrationMail.value)) {
		alert("Неправильно");
	} else {
		alert("Правильно");
	}
}

registrationPassword.onchange = () => {
	if(!password_reg.test(registrationPassword.value)) {
		alert("Неправильно");
	} else {
		alert("Правильно");
	}
}

/*--------------------------------AJAX---------------------------------------------*/
/*Кнопка отправки формы*/
let registrationButton = document.querySelector(".registration-button");

/*AJAX запрос по клику на кнопку*/
registrationButton.onclick = () => {
	/*Создание обьекта, для посылание запроса на различные ресурсы*/
	let xhttp = new XMLHttpRequest();
	/*Ссылка на сервер*/
	let url = "Ссылка на сервер";
	/*Переменная данных для отправки на сервер*/
	let params = registrationName.value + registrationSurname.value + registrationMail.value + registrationPassword.value;
	/*Открытие запроса, синхронный - true*/
	request.open("POST", url, true);
	/*Конфигурация запросов заголовков,
	показывает как отправлять данные,
	какие данные как их обрабатывать и тд,
	синтаксис: XMLHttpRequest.setRequestHeader(header, value)*/
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	/*Послание запроса*/
	xhttp.send(params);

	if (xhttp.status !== 201) {
        console.log('POST запрос отправлен удачно');
    } else {
        console.log('POST запрос отправлен неудачно');
    }
}

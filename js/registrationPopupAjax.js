/*Форма регистрации*/
let registrationForm = document.querySelector(".registration-form");

/*Кнопка Регистрация*/
let registrationLink = document.querySelector(".registration-link");

/*Имя*/
let registrationName = document.querySelector(".registration-name");
/*Фамилия*/
let registrationSurname = document.querySelector(".registration-surname");
/*Почта*/
let registrationMail = document.querySelector(".registration-mail");
/*Пароль*/
let registrationPassword = document.querySelector(".registration-password");

registrationLink.onclick = () => {
	registrationForm.style.display = "block";
}

/*Крестик закрытия формы регистрации*/
let registrationCross = document.querySelector(".registration-cross");

registrationCross.onclick = () => {
	clearForm();
}

/*-------------------------------------AJAX-запрос-------------------------------------*/

/*Кнопка отправки формы*/
let registrationButton = document.querySelector(".registration-button");

/*AJAX запрос по клику на кнопку*/
registrationButton.onclick = () => {

	/*Регулярные выражения*/
	let russian_letters_reg = /[а-я]/i;
	let mail_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	let password_reg = /[A-Za-z0-9]/;
	/*Валидация имени*/
	if (!russian_letters_reg.test(registrationName.value)) {
		alert("НЕКОРРЕКТНОЕ ИМЯ: используйте только русские буквы");
		return false;
	} 
	/*Валидация фамилии*/
	if (!russian_letters_reg.test(registrationSurname.value)) {
		alert("НЕКОРРЕКТНАЯ ФАМИЛИЯ: используйте только русские буквы");
		return false;
	} 
	/*Валидация почты*/
	if (!mail_reg.test(registrationMail.value)) {
		alert("НЕКОРРЕКТНЫЙ @MAIL");
		return false;
	} 
	/*Валидация пароля*/
	if (!password_reg.test(registrationPassword.value)) {
		alert("НЕКОРРЕКТНЫЙ ПАРОЛЬ: используйте только латинские буквы и цифры");
		return false;
	} 

	/*Создание обьекта, для посылание запроса на различные ресурсы*/	
	let xhttp = new XMLHttpRequest();
	/*Ссылка на сервер*/
	let url = "ССЫЛКА_НА_СЕРВЕР";
	/*Переменная данных для отправки на сервер*/
	let params = registrationName.value + registrationSurname.value + registrationMail.value + registrationPassword.value;
	/*Открытие запроса, синхронный - true*/
	xhttp.open("POST", url, true);
	/*Конфигурация запросов заголовков,
	показывает как отправлять данные,
	какие данные как их обрабатывать и тд,
	синтаксис: XMLHttpRequest.setRequestHeader(header, value)*/
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	/*Послание запроса*/
	xhttp.send(params);
	/*Функция, которая показывает результат только после загрузки на сервер*/
	xhttp.onload = function () {
		console.log(xhttp.status);
		if (xhttp.status !== 201) {
			console.log('POST запрос отправлен удачно');
			console.log(xhttp.response);
		} else {
			console.log('POST запрос отправлен неудачно');
		}
	}
	/*Очистка форм*/
	clearForm();
}

/*Очистка форм*/
function clearForm() {
	registrationForm.style.display = "none";
	setTimeout(() => {
		registrationName.value = '';
		registrationSurname.value = '';
		registrationMail.value = '';
		registrationPassword.value = '';
	}, 1000);
}
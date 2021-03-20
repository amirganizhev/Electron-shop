/*--------------------------------------------------------GET-----------------------------------------------------------*/

/*Создание обьекта, для посылание запроса на различные ресурсы*/
let xhttp = new XMLHttpRequest();

/*Функция, которая вызывается всякий раз, когда поле readyState меняет свое значение*/
xhttp.onreadystatechange = function () {
	/*Проверка состояния запроса*/
	if (this.readyState == 4 && this.status == 200) {
		/*Ответ на запрос в виде строки*/
		myFynctiom(this.responseText)
	}
}

/*Открытие запроса, синхронный - true, асинхронный - false*/
xhttp.open('GET', 'КУДА ОТПРАВИТЬ ЗАПРОС', false);
/*Послание запроса*/
xhttp.send();

function myFynctiom(data) {
	console.log(data);
}

/*--------------------------------------------------------POST-----------------------------------------------------------*/

/*Создание обьекта, для посылание запроса на различные ресурсы*/
let xhttp2 = new XMLHttpRequest();

/*Функция, которая вызывается всякий раз, когда поле readyState меняет свое значение*/
xhttp2.onreadystatechange = function () {
	/*Проверка состояния запроса*/
	if (this.readyState == 4 && this.status == 200) {
		/*Ответ на запрос в виде строки*/
		myFynctiom2(this.responseText)
	}
}

/*Открытие запроса, синхронный - true, асинхронный - false*/
xhttp2.open('POST', 'КУДА ОТПРАВИТЬ ЗАПРОС', false);
/*Конфигурация запросов заголовков,
показывает как отправлять данные,
какие данные как их обрабатывать и тд,
синтаксис: XMLHttpRequest.setRequestHeader(header, value)*/
xhttp2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
/*Послание запроса*/
xhttp2.send("КАКИЕ ПАРАМЕТРЫ Я БУДУ ПЕРЕДАВАТЬ");

function myFynctiom2(data) {
	console.log(data);
}
/*Окно помощи*/
const helpWindow = document.querySelector('.help-window');

/*Открытие окна помощи*/
const helpOpen = document.querySelector('.help-open');

helpOpen.onclick = () => {
	helpOpen.style.display = "none";
	helpClose.style.display = "block";
	helpQuestion.textContent = "Нужна помощь?";
	helpAnswer.textContent = ". . .";
	setTimeout(() => helpWindow.style.bottom = "-320px", 50);
	setTimeout(() => helpWindow.style.bottom = "-270px", 100);
	setTimeout(() => helpWindow.style.bottom = "-220px", 150);
	setTimeout(() => helpWindow.style.bottom = "-170px", 200);
	setTimeout(() => helpWindow.style.bottom = "-120px", 250);
	setTimeout(() => helpWindow.style.bottom = "-70px", 300);
	setTimeout(() => helpWindow.style.bottom = "-20px", 350);
	for(let i = 0; i < helpButton.length; i++) {
		helpButton[0].style.display = 'inline-block';
		helpButton[1].style.display = 'inline-block';
		helpButton[2].style.display = 'none';
	}
}

/*Закрытие окна помощи*/
const helpClose = document.querySelector('.help-close');

helpClose.onclick = () => {
	helpPopupClose();
} 

function helpPopupClose() {
	helpOpen.style.display = "block";
	helpClose.style.display = "none";
	setTimeout(() => helpWindow.style.bottom = "-70px", 50);
	setTimeout(() => helpWindow.style.bottom = "-120px", 100);
	setTimeout(() => helpWindow.style.bottom = "-170px", 150);
	setTimeout(() => helpWindow.style.bottom = "-220px", 200);
	setTimeout(() => helpWindow.style.bottom = "-270px", 250);
	setTimeout(() => helpWindow.style.bottom = "-320px", 300);
	setTimeout(() => helpWindow.style.bottom = "-370px", 350);
}

/*Текст вопроса*/
const helpAnswer = document.querySelector('.help-answer-message');
/*Текст ответа*/
const helpQuestion = document.querySelector('.help-question');
/*Кнопка ответа на вопрос*/
const helpButton = document.querySelectorAll('.help-button');

/*Выбор кнопки Да или Нет*/
for(let i = 0; i < helpButton.length; i++) {

	helpButton[0].onclick = () => {

		helpAnswer.textContent = "Да";
		setTimeout(() => helpQuestion.textContent = ".", 100);
		setTimeout(() => helpQuestion.textContent = "..", 200);
		setTimeout(() => helpQuestion.textContent = "...", 300);
		setTimeout(() => helpQuestion.textContent = ".", 400);
		setTimeout(() => helpQuestion.textContent = "..", 500);
		setTimeout(() => helpQuestion.textContent = "...", 600);
		setTimeout(() => helpQuestion.textContent = ".", 700);
		setTimeout(() => helpQuestion.textContent = "..", 800);
		setTimeout(() => helpQuestion.textContent = "...", 900);
		setTimeout(() => {
			helpQuestion.textContent = "Мы вам тут не поможем?";
			helpButton[0].style.display = 'none';
			helpButton[1].style.display = 'none';
			helpButton[2].style.display = 'block';
		}, 1000);
	}
	helpButton[1].onclick = () => {
		helpPopupClose();
	}
	helpButton[2].onclick = () => {
		helpPopupClose();
	}

}
/*Кнопка КУПИТЬ*/
let buttonCard = document.querySelectorAll(".button-card");
/*Корзина*/
let basket = document.querySelector(".basket");
/*Счетчик корзины*/
let counterBasket = 0;

for (let i = 0; i < buttonCard.length; i++) {

buttonCard[i].onclick = () => {
	counterBasket++;
	basket.textContent = 'Очистить' + ' ' + counterBasket;
	}

}

basket.onclick = () => {
	counterBasket = 0;
	basket.textContent = 'Корзина' + ' ' + 0;
}
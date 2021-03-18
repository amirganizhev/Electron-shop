/*Кнопка КУПИТЬ*/
const buttonCard = document.querySelectorAll(".button-card");
/*Корзина*/
const basket = document.querySelector(".basket");
/*Карточка товара*/
const card = document.querySelectorAll(".card");
/*Счетчик корзины*/
let counterBasket = 0;

for (let i = 0; i < buttonCard.length; i++) {

	buttonCard[i].onclick = () => {
		counterBasket++;
		basket.textContent = 'Очистить-корзину' + ' ' + counterBasket;
		for (let j = 0; j < card.length; j++) {
			card[i].classList.add("card-animation");
			setTimeout(() => card[i].classList.remove("card-animation"), 500);
		}
	}

}

basket.onclick = () => {
	counterBasket = 0;
	basket.textContent = 'Корзина' + ' ' + 0;
}
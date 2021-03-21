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
		localStorage.setItem('basket', counterBasket);
		basket.textContent = 'Очистить-корзину' + ' ' + localStorage.getItem('basket');
		for (let j = 0; j < card.length; j++) {
			card[i].classList.add("card-animation");
			setTimeout(() => card[i].classList.remove("card-animation"), 500);
		}
	}

}

basket.onclick = () => {
	counterBasket = 0;
	basket.textContent = 'Корзина' + ' ' + counterBasket;
	localStorage.removeItem('basket');
}
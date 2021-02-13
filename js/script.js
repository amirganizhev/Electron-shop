let cartSum = document.querySelector('.cart-sum');

let cart = {
	'product1': {
		'age': 2,
	},
	'product2': {
		'age': 2,
	},
	'product3': {
		'age': 2,
	},
	'product4': {
		'age': 2,
	},
	'product5': {
		'age': 2,
	},
	'product6': {
		'age': 2,
	},
	'product7': {
		'age': 2,
	},
	'product8': {
		'age': 2,
	},
	'product9': {
		'age': 2,
	},
};

document.onclick = event => {
	if (event.target.classList.contains('plus')) {
		plusFunction(event.target.dataset.id);
	}
	if (event.target.classList.contains('minus')) {
		minusFunction(event.target.dataset.id);
	}
}

// Увеличение количества товара
const plusFunction = id => {
	cart[id]['age']++;
	render();
}

// Уменьшение количества товара
const minusFunction = id => {
	if (cart[id]['age'] - 1 == 0) {
		deleteFunction(id);
		return true;
	}
	cart[id]['age']--;
	render();
}

// Удаление товара товара
const deleteFunction = id => {
	delete cart[id];
	render();
}

// Вывод
const render = () => {
	console.log(cart);
	//cartSum.innerHTML = Object.values('count');
}

render();
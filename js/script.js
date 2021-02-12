let cart = {
	'product1': {
		"name" : "cactus",
		"count" : 3,
	},
	'product2': {
		"name" : "pavlin",
		"count" : 3,
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
	cart[id]["count"]++;
	console.log(cart);
}

// Уменьшение количества товара
const minusFunction = id => {
	if (cart[id]["count"] - 1 == 0) {
		deleteFunction(id);
		return true;
	}
	cart[id]["count"]--;
	console.log(cart);
}

// Удаление товара товара
const deleteFunction = id => {
	delete cart[id];
	console.log(cart);
}


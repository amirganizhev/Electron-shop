let cartImage = document.querySelector('.cart');
let modalCart = document.querySelector('.modal-cart');
let cros = document.querySelector('.cros');

cartImage.onclick = () => {
	modalCart.style.display = 'block';
}

cros.onclick = () => {
	modalCart.style.display = 'none';
}
let changeTheme = document.querySelector('.change-theme');
let body = document.querySelector('body');

changeTheme.onclick = () => {
	body.classList.toggle('brick-theme'); 
	body.classList.toggle('neon-theme'); 
}


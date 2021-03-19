const changeTheme = document.querySelector('.change-theme');
const body = document.querySelector('body');

changeTheme.onclick = () => {
	body.classList.toggle('brick-theme'); 
	body.classList.toggle('neon-theme'); 
}


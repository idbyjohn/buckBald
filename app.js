const body = document.getElementsByTagName('body');
const sandwichMenu = document.getElementsByClassName('sandwichMenu');
const expandableMenu = document.getElementsByClassName('expandableMenu');

sandwichMenu[0].addEventListener('click', () => {
	if (expandableMenu[0].style.height === '') {

		expandableMenu[0].style.height = '170px';

		setTimeout(() => {
			let newClickLander = document.createElement('DIV');
			newClickLander.setAttribute('id', 'clickLander');
			body[0].appendChild(newClickLander);
		}, 501);

		setTimeout(()=>{
			let clickLander = document.getElementById('clickLander');
			clickLander.addEventListener('click', ()=>{
				body[0].removeChild(clickLander);
				expandableMenu[0].style.height = '';
			});
		},502)
			

	} else if (expandableMenu[0].style.height === '170px') {

		expandableMenu[0].style.height = '';

		let clickLander = document.getElementById('clickLander');
		setTimeout( () => {
			body[0].removeChild(clickLander);
		}, 501);
	}
});









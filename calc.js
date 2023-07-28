let a = '';
let b = '';
let sign = '';
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']; 
// screen
const out = document.querySelector('.calc-screen p') 
function clearAll () {
	a = ''; // first number and result
	b = ''; // second number
	sign = ''; // sign 
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
	// натиснута не кнопка (просто поле)
	if(!event.target.classList.contains('btn')) return;
	// натиснута кнопка АС 
	if(event.target.classList.contains('ac')) return;
	out.textContent = '';
	// получаю натиснуту кнопку
	const key = event.target.textContent
	// якщо натиснуто 0-9 або .
	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a+=key;
			
			out.textContent = a;
		}
		else if (a!== '' && b!== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		}
		else {
			b += key;
			out.textContent = b;
		}
		console.table(a, b, sign);
		return;
	}
// якщо натиснуто + - * /
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.table(a, b, sign);
		return;
	}
// якщо натиснуто =
	if (key === '=') {
		switch (sign) {
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "X":
				a = a * b;
				break;
			case "/":
				if (b === '0') {
					out.textContent = 'Err';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
		console.table(a, b, sign);
	}
}


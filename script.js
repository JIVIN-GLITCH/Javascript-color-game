// JS code

let color_code = document.getElementById('color-code');
let color_op1 = document.getElementById('op-1');
let color_op2 = document.getElementById('op-2');
let color_op3 = document.getElementById('op-3');
let color_op4 = document.getElementById('op-4');

let color_divs = [color_op1, color_op2, color_op3, color_op4];

function game() {

	// RGB colors
	rand_r = Math.floor(Math.random()*255)
	rand_g = Math.floor(Math.random()*255)
	rand_b = Math.floor(Math.random()*255)


	document.getElementById('color-code').textContent = 'RGB('+ rand_r +',' + rand_g + ',' + rand_b + ')'

	ans_index = Math.floor(Math.random() * 4);
	answer_div = color_divs[ans_index];

	answer_div.style.backgroundColor = 'rgb('+ rand_r +',' + rand_g + ',' + rand_b + ')' ;
	delete color_divs[ans_index];

	for (let i = 0; i < color_divs.length; i++) {
		if (color_divs[i]) {
			let red = Math.floor(Math.random()*255);
			let blue = Math.floor(Math.random()*255);
			let green = Math.floor(Math.random()*255);

			color_divs[i].style.backgroundColor = 'rgb(' + red + ',' + green +',' + blue + ')';
		}
	}

	return ans_index;
}    

function check() {
	let answer = game();

	let user_choice = document.getElementById('answer').value;

	user_choice = parseInt(user_choice);

	if (user_choice === color_divs.indexOf(answer)) {
		document.getElementById('Result').textContent = 'Congrats!You have got it right';
	}
	else {
		document.getElementById('Result').textContent = 'Wrong';	
	}
}
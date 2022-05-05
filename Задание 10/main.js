let carusels = document.getElementsByClassName('custom-carousel-item');

let slade = 0;

function prev() {
	showSlide(--slade);
}

function next() {
	showSlide(++slade);
}


const next_btn = document.getElementsByClassName('custom-carousel-control-next')[0];
const prev_btn = document.getElementsByClassName('custom-carousel-control-prev')[0];
const dots = document.querySelectorAll('.dot');


next_btn.addEventListener('click', next);
prev_btn.addEventListener('click', prev);


function showSlide(i) {
	let slides = document.getElementsByClassName('custom-carousel-item');
	let length = slides.length - 1;
	
	if (i < 0) { // FIX
		slade = length;
	}
	
	if (i > length) {
		slade = 0;
	}

	
	for (let element of slides) {
    	element.classList.remove('active');
  	}
	
  	slides[slade].classList.add('active');
	
	// FIX start
	for (let dot of dots) {
    	dot.classList.remove('active');
  	}
  	dots[slade].classList.add('active');
  	// FIX end
}

//Здесь в чём-то ошибка. Без нижнего кода слайдер работает, но с ним ни кнопки, ни сам слайдер не срабатывает.

// FIX start
dots.forEach((el, indx)=>{
	el.addEventListener('click', () => {
		showSlide(slade = indx);
	});
})
// FIX end

// dots.forEach((custom-carousel-item, sladeDot) => {
// 	custom-carousel-item.addEventListener('click', () => {
// 		slade = sladeDot;
// 	}
// }

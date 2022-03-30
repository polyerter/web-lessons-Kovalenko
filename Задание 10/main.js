let carusels = document.getElementsByClassName('custom-carousel-item');

let btnr = document.getElementsByClassName('carousel-control-next');
i = 0;
function prev() {
	carusels[i].style.display = 'none';
	let counter = document.getElementsByClassName('counter');
	counter.innerText = --i;
	console.log(carusels);
}

function next() {
	carusels[i].style.display = 'none';
	let counter = document.getElementsByClassName('counter');
	counter.innerText = ++i;
	console.log(carusels);
}

let btnl = document.getElementsByClassName('carousel-control-prev'); 
 for (let i=0; i< btnl.length;) {
 btnl[i].addEventListener('click', prev);
}

if(i >= carusels.length){
  i = 0;
}



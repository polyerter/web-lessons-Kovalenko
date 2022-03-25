function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//console.log(getRandomInt(6));


function handler() {
 let colors = ['#000','#8f9873','#d10374','#09f919','#f8d555','#8c0444'];
 
 this.style.background = colors[getRandomInt(6)];
 
 console.log(this);
}

  
  let btns = document.getElementsByClassName('btn');
 
 for (let i=0; i< btns.length; i++) {
 btns[i].addEventListener('click', handler);
 }
let imputRed = null;
let imputGreen = null;
let imputBlue = null;
let valueRangeRed = 0;
let valueRangeGreen = 0;
let valueRangeBlue = 0;
let rgbColor = null;
let divSquare = null;

let r = '0';
let g = '0';
let b = '0';

window.addEventListener('load', start());

function start() {
  mapRanges();
  sync();
}

function mapRanges() {
  imputRed = document.querySelector('#imputRed');
  imputGreen = document.querySelector('#imputGreen');
  imputBlue = document.querySelector('#imputBlue');

  valueRangeRed = document.querySelector('#valueRangeRed');
  valueRangeGreen = document.querySelector('#valueRangeGreen');
  valueRangeBlue = document.querySelector('#valueRangeBlue');

  divSquare = document.querySelector('.square');

  rgbColor = document.querySelector('#rgbColor');

  imputRed.addEventListener('change', handleImputRangeChange);
  imputGreen.addEventListener('change', handleImputRangeChange);
  imputBlue.addEventListener('change', handleImputRangeChange);
}

function handleImputRangeChange(event) {
  const value = event.target.value;
  const id = event.target.id;

  switch (id) {
    case 'imputRed':
      r = value;
      break;
    case 'imputGreen':
      g = value;
      break;
    case 'imputBlue':
      b = value;
      break;
  }
  sync();
}

function sync() {
  divSquare.style.backgroundColor = `rgb(${r},${g},${b})`;

  valueRangeRed.value = r;
  valueRangeGreen.value = g;
  valueRangeBlue.value = b;

  rgbColor.textContent = `${r}, ${g}, ${b}`;
}

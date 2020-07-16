// print on console the frase "Hello, World!"
console.log('Hello, World!');

// declare variables and get value form specified tag, or id or class
//from the html file
let title = document.querySelector('h1');
let name = document.querySelector('#name');
let age = document.querySelector('#age');
let sex = document.querySelector('#sex');
let nationality = document.querySelector('#nationality');
let countryLiving = document.querySelector('#countryLiving');
// Get the all elements from the html file with the same class
// in this case it return a node list
//to work easy you can change it to Array, using the command Array.from()
let firstDivArray = document.querySelectorAll('.info');

// print on console all the variables got
console.log(title.textContent);
console.log(name.textContent);
console.log(age.textContent);
console.log(sex.textContent);
console.log(nationality.textContent);
console.log(countryLiving.textContent);
console.log(firstDivArray);

// Get the node list you got before and change it to Array
firstDivArray = Array.from(firstDivArray);
// Print the variable now as an Array
console.log(firstDivArray);

// Go through all the array and change the content when the if case match
// And add the class to all itens inside the Array
// And print on console all the values inside the Array;
for (var i = 0; i < firstDivArray.length; i++) {
  var currentElement = firstDivArray[i];
  if (currentElement.textContent === 'Current living: Australia') {
    currentElement.textContent = 'Current living: Taiwan';
  }
  console.log(currentElement.textContent);
  currentElement.classList.add('highlight');
}

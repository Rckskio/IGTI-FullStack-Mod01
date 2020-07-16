'use strict'; // The JavaScript will point more when there is error!

// Diference between var x let x const

// var is bigger scope
// let is lower scope

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }

  i = 20;
  console.log(i);
}

withVar();

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let' + i);
  }

  // This will cause error "Uncaught ReferenceError: i is not defined at withLet (script.js:24) at script.js:29"
  // i = 20;
  // console.log(i);
}

withLet();

// Const can't change the assigned value, its recomended to always use const

const c = 10;

console.log(c);

// This will cause the error "Uncaught TypeError: Assignment to constant variable. at script.js:38"
// c = 20;
// console.log(c);

// But const on arrays is a little bit different
// while you cannot assign a new value direct you still can user array functions to do it
const d = [];
console.log(d);

// This will cause erro Uncaught TypeError: Assignment to constant variable. at script.js:38"
// d = 1;

// but this won't, because its a function of the array manipulating the reference of the value;
d.push(1);
console.log(d);

function sum(a, b) {
  return a + b;
}

// Anonymous function
const sum2 = function (a, b) {
  return a + b;
};

// Arrow function
const sum3 = (a, b) => {
  return a + b;
};

// Arrow fuction reduced
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

// Template literals

const name = 'Luiz';
const surName = 'Goncalves';
const text = 'My name is ' + name + ' ' + surName;
console.log(text);
const text2 = `My name is ${name} ${surName}`;
console.log(text2);

// Default values on fuctions

const sum5 = (a, b = 10) => a + b;
console.log(sum5(2, 4));

// This case with return sum of 5 and the default value of b, in this case 5 + 10 = 15
console.log(sum5(5));

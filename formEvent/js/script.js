/* 
This method prevents the JavaScript from running before the page is totally loaded.
After it completes, it calls the method start.
*/
window.addEventListener('load', start);

/* 
  Here is the first method called when the page is completely loaded
  Basically it starts the program
  In this case it prints on console the 2 messages, get the tag and add to the var name
  After that, addEventListener to the var name - in this case every time a key is pressed and then released
  Note that only when the key is totally released it triggers the event calling the method countName 
*/
function start() {
  console.log('JavaScript working on page formEvent');
  console.log('Page totally loaded');

  var name = document.querySelector('#input1');
  name.addEventListener('keyup', countName);

  // This is to prevent the form to submit after the button is pressed
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

/* 
  The method count name, triggered every time a key is pressed and then released
  it receives the event that has occured, then create the var count assing the event.target.value
  in this case it is going to be the text that has been typed on the input field.
  After that creates another var to get the tag wich you wanna modify
  with this var created and the tag assigned, you get the length of the var count to add to this tag
  Note that the var count value it is going to be the text typed on the input until the last key pressed 
*/

function countName(event) {
  var count = event.target.value;

  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}

function preventSubmit(event) {
  event.preventDefault();

  var name = document.querySelector('#input1');
  console.log(name.value);
  alert(name.value + ' Registered successfully!');
}

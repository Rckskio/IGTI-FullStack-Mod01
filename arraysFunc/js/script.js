// Function to start javascript after page is totally loaded using arrow function on start
window.addEventListener('load', () => {
  /*// Create an Array with the elements that the function map will get
  const arrayNameEmail = people.results.map((person) => {
    // Return a list with the specified parameters only, to assign to the arrayNameEmail
    // In this case will bring only the small arrays containing name and email
    // note that the person.name contains more than 1 array, with array title, array first and array last
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(arrayNameEmail);*/
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

// The same function to map the Array people bringing only the specified parameters name and email
// I did this function here just to separate, it may need to use again;
function doMap() {
  const arrayNameEmail = people.results.map((person) => {
    // Return a list with the specified parameters only, to assign to the arrayNameEmail
    // In this case will bring only the small arrays containing  name and email
    // note that the person.name contains more than 1 array, with array title, array first and array last
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(arrayNameEmail);
  return arrayNameEmail;
}

// This function will create a new array assigning the values that are equal to the parameters specified
// The both methods map and filter they are immutable, meaning they don't change the original array, they create a new one
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}
// The method forEach of array is mutable, so its better to create another array to work on it
// In this case it will create another array called mappedPeople and assign the return of function doMap() to it
// Then it will go through the array adding another attribute of array called nameSize: and concatenate the full length of name
// in this case is title + first + last, note even space count!
function doForEach() {
  const mappedPeople = doMap();
  console.log(mappedPeople);

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;

  // for (let i = 0; i < people.results.length; i++) {
  //   let current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges);
}

// Return the first result found on the array
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

// Return true if the array contain the parameter given
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

// Return true if every indice of the array contai the same parameter given
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);
}

function doSort() {
  const sortedPeople = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    .sort((a, b) => {
      // To sort it by alphabetical order
      //return a.name.localeCompare(b.name);
      // To sort it by length of the name from smallest to largest
      //return a.name.length - b.name.length;
      // To sort it by length of the name from largest to smallest
      return b.name.length - a.name.length;
    });

  console.log(sortedPeople);
}

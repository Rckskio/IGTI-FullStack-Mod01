window.addEventListener('load', () => {
  console.log('Loaded');
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  // Just another way to do it
  // const marriedMen = people.results.filter((person) => {
  //   return person.name.title === 'Mr';
  // });
  // Simple way to initializer const marriedMen with the results of the filter method on the array people by name then title
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  // Simple way to initializer const marriedWomen with the results of the filter method on the array people by name then title
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  console.log(marriedMen);
  console.log(marriedWomen);

  // Using spread to initialize another array with both arrays marriedMen and Married Women also an extra array just to show it works
  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Hi' }];
  console.log(marriedPeople);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
  console.log(infiniteSum(1, 2, 500));
  console.log(infiniteSum(1, 2, 3, 5, 7));
  console.log(infiniteSum(1, 2, 4, 6, 12));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

function doDestructuring() {
  const first = people.results[0];

  // Repetitive
  // const username = first.login.username;
  // const password = first.login.password;

  //Destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}

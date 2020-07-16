// Basic usage of fetch to get data from http
window.addEventListener('load', () => {
  console.log('Before promisse');
  // Request the http url for get the data, then return resources as a variable
  // the change it to Json format passing to data variable
  // fetch('https://api.github.com/users/rckskio')
  //   .then((res) => {
  //     res.json().then((data) => {
  //       // Call the method useData() passing the parameter data from the result of
  //       // fetch then pass to json than return data
  //       useData(data);
  //     });
  //   })
  //   .catch((error) => {
  //     console.log('Something went wrong');
  //   });

  // new Fetch
  doFetch();
  doFetchAsync();

  //  If call the method like this, it wont return the division, but actually a promise
  //  console.log(divisionPromisse(5, 2));
  //  console.log(divisionPromisse(5, 0));

  // So it needs to treat as a promise and get the value when resolved
  divisionPromise(12, 6).then((res) => {
    console.log(res);
  });
  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});

function doFetch() {
  fetch('https://api.github.com/users/rckskio')
    .then((res) => {
      res.json().then((data) => {
        // Call the method useData() passing the parameter data from the result of
        // fetch then pass to json than return data
        useData(data);
      });
    })
    .catch((error) => {
      console.log('Something went wrong');
    });
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/rckskio');
  const json = await res.json();
  console.log(json);
}

// Basic usage of the data got from the fetch, acessing atributes from the file
// after it changed to json format
function useData(data) {
  console.log(data);
  let img = document.querySelector('img');
  let name = document.querySelector('#name');
  name.textContent = data.name + ' ' + data.login + ' ' + data.id;
  img.src = data.avatar_url;
  console.log('After promisse');
}

// method as a promise, rare to do it is here just to understand the concept of promises
function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Not possible to divide for Zero');
    }
    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(12, 0)
    .then((res) => {
      console.log(res);
    })
    .catch((errorMessage) => {
      console.log('Failed to divide ' + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}

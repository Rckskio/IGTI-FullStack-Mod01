// Examples how to user timers, setTimeout, setInterval and clearInterval
window.addEventListener('load', () => {
  console.log('loaded');
  const timer = document.querySelector('#timer');
  let count = 0;
  const interval = setInterval(() => {
    timer.textContent = ++count;

    if (count === 10) {
      clearInterval(interval);
      //timer.textContent = '';
      return;
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ',5';
      }, 500);
    }
  }, 1000);

  console.log('Hello');
  setTimeout(() => {
    console.log('Process Finished!');
  }, 10000);
  console.log('bye');
});

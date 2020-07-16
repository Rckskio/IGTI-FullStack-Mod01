// Function to start after load
window.addEventListener('load', start);

function start() {
  console.log('Started fully loaded');
  // Get the tag with id inputRange and assing to var inputRange
  var inputRange = document.querySelector('#inputRange');

  // addEventListener to trigger event after change occur on inputRange and call the fuction to handle it
  inputRange.addEventListener('input', handleInputRangeChange);
}

function handleInputRangeChange(event) {
  // Get the value from the event target and assign to var currentFrequency
  var currentFrequency = event.target.value;
  // Get tag with id inputFrequency and assign to var inputFrequency
  var inputFrequency = document.querySelector('#inputFrequency');
  // Change value of var inputFrequency to currentFrequency
  inputFrequency.value = currentFrequency;

  // Call the function passing parameter currentFrequency
  showPodcastFromFrequency(currentFrequency);
}

// Function to display if there is a podcast on the frequency selected on inputRange
function showPodcastFromFrequency(frequency) {
  var hasPodcast = false;
  //var podcast = null;

  //ES5
  /* for (var i = 0; i < realPodcasts.length; i++) {
    var currentPodcast = realPodcasts[i];

    // go through the list checkeing every frequency if is iqual to the currentFrenquency
    if (currentPodcast.id === frequency) {
      hasPodcast = true;
      podcast = currentPodcast;
    }
  }*/

  //ES6+
  var currentPodcast = realPodcasts.find(function (podcast) {
    return frequency === podcast.id;
  });

  if (!!currentPodcast) {
    renderPodcast2(currentPodcast);
  } else {
    divPodcasts.textContent = 'No podcast found...';
  }

  /*// ih hasPodcast is true, call the function with the parameter podcast
  if (hasPodcast) {
    renderPodcast2(podcast);
  } else {
    divPodcasts.textContent = 'No podcast found here!';
  }
}*/
}
// renderiza the page with the content of the list podcasts using appendChild
function renderPodcast(podcast) {
  var divPodcasts = document.querySelector('#divPodcasts');
  divPodcasts.innerHTML = '';

  var img = document.createElement('img');
  img.src = '../radio-podcast/img/' + podcast.img;

  var h2 = document.createElement('h2');
  h2.textContent = podcast.title;

  var p = document.createElement('p');
  p.textContent = podcast.description;

  divPodcasts.appendChild(img);
  divPodcasts.appendChild(h2);
  divPodcasts.appendChild(p);

  return divPodcasts;
}

// renderiza the page with the content of the list podcasts using innerHTML
function renderPodcast2(podcast) {
  // This is called object destructuring, it crate the vars with the respective itens on array podcast
  // Also it could be done on the function parametre
  // function renderPodcast2({ img, title, description}) {};
  var { img, title, description } = podcast;

  divPodcasts.innerHTML = ` 
    <img src='../radio-podcast/img/${img}' />
    <h2>${title}</h2>
    <p>${description}</p>
  `;
  return divPodcasts;
}

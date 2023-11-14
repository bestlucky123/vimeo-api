// Added the @vimeo/player library as a project dependency via npm

// Import Vimeo Player and throttle
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

// Find the iframe element on page
const iframe = document.querySelector('iframe');

// Create an instance of Vimeo Player
const player = new Player(iframe);

// Define the key for local storage
const localStorageKey = 'videoplayer-current-time';

// Define the callback function for the timeupdate event
const onTimeUpdate = function (data) {
  // Save the current time to local storage
  localStorage.setItem(localStorageKey, data.seconds);
  console.log('Current time saved to localStorage:', data.seconds);
};

// Add a throttled listener for the timeupdate event, limiting onTimeUpdate calls to every 1000 milliseconds.
player.on('timeupdate', throttle(onTimeUpdate, 1000));

// Set the current time using the saved value from localStorage
player
  .setCurrentTime(JSON.parse(localStorage.getItem(localStorageKey)) || 0)
  .then(function (seconds) {
    console.log('Video resumed from saved time:', seconds);
  })
  .catch(function (error) {
    console.error('Error setting current time:', error);
  });

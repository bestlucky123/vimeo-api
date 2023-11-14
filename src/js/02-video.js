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
  //   console.log('Current time saved to localStorage:', data.seconds);
};

// Add a throttled listener for the timeupdate event, limiting onTimeUpdate calls to every 1000 milliseconds.
player.on('timeupdate', throttle(onTimeUpdate, 1000));

// ---------------------------------------- TESTS ----------------------------------------

// // Set an event handler for the 'play' event
// player.on('play', function () {
//   console.log('Video started playing.');
// });

// // Call the getVideoTitle method after initializing the player
// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// // Definition of a callback function for the timeupdate event
// const onTimeUpdate = function (data) {
//   // data - is an object containing information about the current playback time
//   console.log('Current time:', data.seconds, 'of', data.duration, 'seconds');
//   console.log('Percentage played:', data.percent * 100, '%');
// };

// // Set the listener of the 'timeupdate' event and specify the callback function onTimeUpdate
// player.on('timeupdate', onTimeUpdate);

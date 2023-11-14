// Added the @vimeo/player library as a project dependency via npm

// Import Vimeo Player
import Player from '@vimeo/player';

// Find the iframe element on page
const iframe = document.querySelector('iframe');

// Create an instance of Vimeo Player
const player = new Player(iframe);

// Set an event handler for the 'play' event
player.on('play', function () {
  console.log('played the video!');
});

// Call the getVideoTitle method after initializing the player
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

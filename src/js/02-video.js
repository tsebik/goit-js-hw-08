import Vimeo from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

getLocalStorage();

player.on('timeupdate', function (data) {
  const timePlayer = data.seconds;

  localStorage.setItem(STORAGE_KEY, timePlayer);
});

function getLocalStorage() {
  const valueLocalStorage = localStorage.getItem(STORAGE_KEY);

  if (valueLocalStorage) {
    player
      .setCurrentTime(valueLocalStorage)
      .then(function (seconds) {
        seconds = valueLocalStorage;
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
  }
}

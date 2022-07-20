import Vimeo from '@vimeo/player';

const LOCAL_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', function (data) {
  const timePlayer = data.seconds;

  localStorage.setItem(LOCAL_KEY, timePlayer);
});

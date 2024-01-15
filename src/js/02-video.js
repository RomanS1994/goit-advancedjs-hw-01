import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LS_KEY, JSON.stringify(data.seconds));
  }, 2000)
);

const currentTime = localStorage.getItem(LS_KEY);
player.setCurrentTime(JSON.parse(currentTime));

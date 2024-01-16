import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LS_KEY, seconds);
  }, 2000)
);

const currentTime = localStorage.getItem(LS_KEY) || 0;
player.setCurrentTime(JSON.parse(currentTime));

let canvas, context
let WIDTH = 400, HEIGHT = 400
let IS_KEY_PRESSED = {}
let prev_mouse = new Array(2).fill(-10)
let is_mouse = new Array(2).fill(-10)
let next_mouse = new Array(2).fill(-10)

function keyDown (event) {
  IS_KEY_PRESSED[event.keyCode] = true;
}

function keyUp (event) {
  IS_KEY_PRESSED[event.keyCode] = false;
}

function onClick(e) {
  var rect = e.target.getBoundingClientRect();
  next_mouse = [e.clientX - Math.floor(rect.left) - 2, e.clientY - Math.floor(rect.top) - 2];
}

function offClick(e) {
  var rect = e.target.getBoundingClientRect();
  next_mouse[0] = -10;
  next_mouse[1] = -10;
}

function onc(xx, yy, xxx, yyy) {
  if (is_mouse != prev_mouse) {
    if (xx <= is_mouse[0] && is_mouse[0] <= xxx) {
      if (yy <= is_mouse[1] && is_mouse[1] <= yyy) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

function spaceKey () {
  return IS_KEY_PRESSED[32]
}

function leftKey () {
  return (IS_KEY_PRESSED[37]);
}

function rightKey () {
  return (IS_KEY_PRESSED[39]);
}

function upKey () {
  return (IS_KEY_PRESSED[38])
}

function downKey() {
  return (IS_KEY_PRESSED[40])
}

function init () {
  canvas = document.getElementById('game');
  context = canvas.getContext('2d');

  context.textAlign = 'center';
  context.textBaseline = 'middle';

  window.addEventListener('keydown', keyDown, true);
  window.addEventListener('keyup', keyUp, true);
  window.addEventListener('mousedown', onClick, true);
  window.addEventListener('mouseup', offClick, true);

  let game_loop = setInterval(main, 100);
}
  
window.onload = init;
  
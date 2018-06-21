// Continually draw image to canvas
const cvs = document.getElementById('canvas');

// Creates 2d canvas and numerous methods to manipulate it
const ctx = cvs.getContext('2d');

// Images for game
const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

bird.src = 'images/bird.png';
bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
pipeNorth.src = 'images/pipeNorth.png';
pipeSouth.src = 'images/pipeSouth.png';

// Audio for game

const fly = new Audio();
const score = new Audio();

fly.src = '/sounds/fly.mp3'
score.src = '/sounds/score.mp3'

// Draw Images format
// ctx.drawImage(imageName, X, Y, Width, Height);

draw = () => {
  // Background - center in canvas
  ctx.drawImage(bg, 0, 0);
  // Pipes - pipeSouth, constant added as pipe hight + gap
  ctx.drawImage(pipeNorth, pX, pY);
  ctx.drawImage(pipeSouth, pX, pY + Const);

  // Foreground - comes up from bottom, taking up canvas height - fg height
  ctx.drawImage(fg, 0, cvs.height - fg.height);

  // Bird
  ctx.drawImage(bird, bX, bY);


}

// Invoke draw
draw();
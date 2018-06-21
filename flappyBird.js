window.onload = function() {

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

bird.src = './images/bird.png';
bg.src = './images/bg.png';
fg.src = './images/fg.png';
pipeNorth.src = './images/pipeNorth.png';
pipeSouth.src = './images/pipeSouth.png';

// Audio for game

const fly = new Audio();
const score = new Audio();

fly.src = './sounds/fly.mp3'
score.src = './sounds/score.mp3'

// Draw Images format
// ctx.drawImage(imageName, X, Y, Width, Height);

let gap = 85;
let constantValue = pipeNorth.height + gap;

// Bird X and Y coordinates
let birdX = 10;
let birdY = 15

// Gravity effect on bird
let gravity = 1;

// on Key event
document.addEventListener('keydown', moveUp);

function moveUp() {
  birdY -= 20;
}

// Pipe Coordinates
const pipe = [];

pipe[0] = {
  x: cvs.width,
  y: 0
}


function draw() {
  // Background - center in canvas
  ctx.drawImage(bg, 0, 0);

  // Pipes - pipeSouth, constant added as pipe hight + gap
  for( let i = 0; i > pipe.length; i++) {
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constantValue);

    pipe[i].x--;

    if(pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height - pipeNorth.hight)
      });
    }

  }


  // Foreground - comes up from bottom, taking up canvas height - fg height
  // ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(fg, 0, cvs.height -fg.height)

  // Bird
  ctx.drawImage(bird, 15, 150);

  birdY += gravity;

  requestAnimationFrame(draw);
}

// Invoke draw
draw();

}
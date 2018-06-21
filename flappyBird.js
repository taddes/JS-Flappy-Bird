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
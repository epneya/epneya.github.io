const canvas = document.getElementById('cgol');
const ctx = canvas.getContext('2d');
let board = [];

function init() {
  canvas.width = 200;
  canvas.height = 200;
  for (let i = 0; i < 20 * 20; i++) {
    board[i] = Math.round(Math.random());
  }
}

function update() {
  let newBoard = [];
  for (let i = 0, c = 0; i < board.length; i++) {
    if (board[i - 21]) c++;
    if (board[i - 20]) c++;
    if (board[i - 19]) c++;
    if (board[i -  1] && !(i % 20)) c++;
    if (board[i +  1] && (i % 20) != 19) c++;
    if (board[i + 19]) c++;
    if (board[i + 20]) c++;
    if (board[i + 21]) c++;

    if (!board[i]) {
      newBoard[i] = c == 3 ? 1 : 0;
    } else {
      newBoard[i] = c == 2 | c == 3 ? 1 : 0;
    }

    c = 0;
  }
  board = newBoard;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < board.length; i++) {
    if (board[i] == 1) ctx.fillRect(10 * (i % 20), 10 * Math.floor(i / 20), 10, 10);
  }
}

function main() {
  ctx.fillStyle = "#000";

  let FRAMES = 0, TICKS = 0;
  init();

  let loop = function () {
    if (FRAMES % 30 == 0) {
      update();
      draw();
      TICKS++;
    }
    FRAMES++;
    window.requestAnimationFrame(loop, canvas);
  };
  window.requestAnimationFrame(loop, canvas);
}

main();

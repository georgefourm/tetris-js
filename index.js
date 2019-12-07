import {Renderer} from "./src/rendering";
import {initBoard} from "./src/board";
import {spawnBlock} from "./src/blocks"
import {InputListener} from "./src/input";
import {findFilledRows,clearRows,calculateScore} from "./src/scoring";

const boardWidth = 10;
const boardHeight = 20;

const dropDelay = 1000;
const moveDelay = 100;

const backGroundColor = "#f2f2f2";

const board = initBoard(boardWidth, boardHeight);
const input = new InputListener(window);
const renderer = new Renderer(boardWidth, boardHeight);

const scoreText = document.querySelector('#score');

let block = spawnBlock(board);
let previousRender = Date.now();
let score = 0;

window.addEventListener("DOMContentLoaded", () => {
    main()
});

function main() {

    const delta = Date.now() - previousRender;
    handleInput(delta);
    let gameOver = handleLogic(delta);
    handleRendering();

    previousRender = Date.now();

    if (!gameOver) {
        window.requestAnimationFrame(main)
    }
}

function handleInput(delta) {
    handleInput.time += delta;
    if (handleInput.time < moveDelay || !block.canMove) {
        return;
    }
    handleInput.time = 0;

    if (input.isRightPressed()) {
        block.moveRight()
    }

    if (input.isLeftPressed()) {
        block.moveLeft()
    }

    if (input.isDownPressed()) {
        block.moveDown()
    }

    if (input.isRotatePressed()){
        block.rotate()
    }
}

handleInput.time = 0;

function handleLogic(delta) {
    handleLogic.time += delta;
    if (handleLogic.time >= dropDelay) {
        block.moveDown();
        handleLogic.time = 0;
    }

    let gameOver = false;

    const filledRows = findFilledRows(board);
    clearRows(board,filledRows);
    score += calculateScore(filledRows);
    scoreText.textContent = score;

    if (!block.canMove) {
        block = spawnBlock(board)
    }

    return gameOver;
}

handleLogic.time = 0;

function handleRendering() {
    renderer.drawBackground(backGroundColor);
    renderer.drawBlock(block);
    renderer.drawBoard(board);
}

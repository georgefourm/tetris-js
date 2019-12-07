export default class Block {
    /**
     * Represents a block
     * @param {Array[]} board The game board
     * @param {Array[]} body The body of the block
     * @param {Number} x The starting x position
     * @param {Number} y The starting y position
     */
    constructor(board, body, x, y) {
        this.board = board;

        this.rotations = body;
        this.currRotation = 0;
        this.body = body[this.currRotation];

        this.height = this.body.length;
        this.width = this.body[0].length;
        this.x = x;
        this.y = y;

        this.canMove = true
    }

    place() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                const block = this.body[i][j];
                if (block === 1) {
                    this.board[this.y + i][this.x + j] = 1;
                }
            }
        }
    }

    collidesDown() {
        if (this.y + this.height === this.board.length) {
            return true;
        }
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                const tile = this.body[row][col];
                const tileBelow = this.board[this.y + row + 1][this.x + col];
                if (tile === 1 && tileBelow === 1) {
                    return true
                }
            }
        }
    }

    collidesLeft() {
        if (this.x === 0) {
            return true
        }
        for (let row = 0; row < this.height; row++) {
            const tileLeft = this.board[this.y + row][this.x - 1];
            if (this.body[row][0] === 1 && tileLeft === 1) {
                return true
            }
        }
    }

    collidesRight() {
        if (this.x + this.width === this.board[0].length) {
            return true
        }
        for (let row = 0; row < this.height; row++) {
            const tileRight = this.board[this.y + row][this.x + this.width];
            if (this.body[row][this.width - 1] === 1 && tileRight === 1) {
                return true
            }
        }
    }

    moveDown() {
        if (!this.collidesDown()) {
            this.y++
        } else {
            this.place();
            this.canMove = false;
        }
    }

    moveRight() {
        if (!this.collidesRight()) {
            this.x++
        }
    }

    moveLeft() {
        if (!this.collidesLeft()) {
            this.x--
        }
    }

    rotate(){
        this.currRotation = (this.currRotation + 1) % this.rotations.length;
        this.body = this.rotations[this.currRotation];
        this.width = this.body[0].length;
        this.height = this.body.length;
    }

}
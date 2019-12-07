/**
 * Class responsible for drawing items on the canvas
 */
export class Renderer {
    /**
     * Constructs a renderer for the provided board dimensions
     * @param {Number} width 
     * @param {Number} height 
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.canvas = document.getElementById('board');
        this.ctx = this.canvas.getContext('2d');
        this.blockSize = this.canvas.height / height;

        this.foregroundColor = 'black'
    }

    /**
     * Renders the background
     * @param {String} color 
     */
    drawBackground(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Draws the internal reprsentation of the board on the canvas
     * @param {Array[]} board 
     */
    drawBoard(board) {
        let y = 0;
        this.ctx.fillStyle = this.foregroundColor;

        for (const row of board) {
            let x = 0;
            for (const cell of row) {
                if (cell === 1) {
                    this.ctx.fillRect(
                        x * this.blockSize,
                        y * this.blockSize,
                        this.blockSize,
                        this.blockSize
                    );
                }
                x++;
            }
            y++;
        }
    }

    /**
     * Draws a block on the canvas
     * @param {Block} block
     */
    drawBlock(block) {
        this.ctx.fillStyle = this.foregroundColor;

        for (let i = 0; i < block.body.length; i++) {
            const row = block.body[i];
            for (let j = 0; j < row.length; j++) {
                if (row[j] !== 1) continue;
                this.ctx.fillRect(
                    (block.x + j) * this.blockSize,
                    (block.y + i) * this.blockSize,
                    this.blockSize,
                    this.blockSize
                )
            }
        }
    }

}
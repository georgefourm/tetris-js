export function initBoard(width, height) {
    const board = [];
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push(0)
        }
        board.push(row)
    }
    return board;
}
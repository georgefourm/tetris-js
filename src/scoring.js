export function findFilledRows(board){
    const filled = [];
    for (let i = board.length - 1; i >= 0; i--) {
        const row = board[i];
        let isFilled = true;
        for (let col = 0; col < row.length; col++) {
            isFilled = isFilled && row[col] === 1
        }
        if (isFilled){
            filled.push(i)
        }
    }
    return filled
}

export function clearRows(board,rows){
    for (const rowIndex of rows){
        for (let i = rowIndex; i >= 0; i--) {
            if (i === 0){
                board[i].fill(0)
            }else{
                board[i] = [...board[i-1]]
            }
        }
    }
}

export function calculateScore(rows){
    return rows.length
}
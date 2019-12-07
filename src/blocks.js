import Block from "./models/Block";

const I = [
    [
        [1],
        [1],
        [1],
        [1],
    ],
    [
        [1, 1, 1, 1]
    ],
];

const J = [
    [
        [0, 1],
        [0, 1],
        [1, 1]
    ],
    [
        [1, 0, 0],
        [1, 1, 1]
    ],
    [
        [1, 1],
        [1, 0],
        [1, 0]
    ],
    [
        [1, 1, 1],
        [0, 0, 1]
    ]
];

const L = [
    [
        [1, 0],
        [1, 0],
        [1, 1]
    ],
    [
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1],
        [0, 1],
        [0, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 0]
    ]
];

const O = [
    [
        [1, 1],
        [1, 1],
    ]
];

const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
    ],
    [
        [1, 0],
        [1, 1],
        [0, 1]
    ],
];

const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 0]
    ],
    [
        [1, 1, 1],
        [0, 1, 0],
    ],
    [
        [0, 1],
        [1, 1],
        [0, 1]
    ],
];

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [0, 1],
        [1, 1],
        [1, 0]
    ]
];

export const blocks = [I, J, L, O, S, T, Z];

export function spawnBlock(board) {
    const type = Math.floor(Math.random() * Math.floor(blocks.length - 1));
    return new Block(board, blocks[type], Math.floor(board[0].length / 2) - 1, 0);
}
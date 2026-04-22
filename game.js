const boardElement = document.getElementById('board');
let selectedPiece = null;

// 0: bo'sh, 1: qizil (siz), 2: oq (AI)
let boardState = [
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

function renderBoard() {
    boardElement.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell ' + ((r + c) % 2 == 0 ? 'white' : 'black');
            cell.onclick = () => onCellClick(r, c);

            if (boardState[r][c] !== 0) {
                const piece = document.createElement('div');
                piece.className = 'piece ' + (boardState[r][c] === 1 ? 'p-player' : 'p-ai');
                if (selectedPiece && selectedPiece.r === r && selectedPiece.c === c) {
                    piece.style.boxShadow = "0 0 10px 5px yellow"; // Tanlanganini ko'rsatish
                }
                cell.appendChild(piece);
            }
            boardElement.appendChild(cell);
        }
    }
}

function onCellClick(r, c) {
    // Agar donani bossangiz - uni tanlang
    if (boardState[r][c] === 1) {
        selectedPiece = { r, c };
        renderBoard();
    } 
    // Agar bo'sh joyni bossangiz va donani tanlagan bo'lsangiz - yuring
    else if (boardState[r][c] === 0 && selectedPiece) {
        // Oddiy yurish (diagonal harakat tekshiruvi shart, lekin hozircha erkin harakat)
        boardState[r][c] = 1;
        boardState[selectedPiece.r][selectedPiece.c] = 0;
        selectedPiece = null;
        renderBoard();
    }
}

renderBoard();

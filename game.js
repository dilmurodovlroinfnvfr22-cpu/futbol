const boardElement = document.getElementById('board');
// 8x8 taxta massivi: 0 - bo'sh, 1 - Player (Siz), 2 - AI
let board = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
];

let selectedPiece = null;

function renderBoard() {
    boardElement.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            let cell = document.createElement('div');
            cell.className = 'cell ' + ((r + c) % 2 == 0 ? 'white' : 'black');
            cell.onclick = () => handleCellClick(r, c);

            if (board[r][c] !== 0) {
                let piece = document.createElement('div');
                piece.className = 'piece ' + (board[r][c] === 1 ? 'p-player' : 'p-ai');
                if (selectedPiece && selectedPiece.r === r && selectedPiece.c === c) {
                    piece.style.border = "4px solid yellow"; // Tanlanganini belgilash
                }
                cell.appendChild(piece);
            }
            boardElement.appendChild(cell);
        }
    }
}

function handleCellClick(r, c) {
    // Agar o'z donangizni bossangiz - tanlang
    if (board[r][c] === 1) {
        selectedPiece = { r, c };
        renderBoard();
    } 
    // Agar bo'sh joyni bossangiz va donani tanlagan bo'lsangiz - yuring
    else if (board[r][c] === 0 && selectedPiece) {
        // Oddiy yurish qoidasi (diagonal tekshiruvi qo'shish kerak)
        board[r][c] = 1;
        board[selectedPiece.r][selectedPiece.c] = 0;
        selectedPiece = null;
        renderBoard();
        
        // Bu yerda AI ning yurishi chaqiriladi (keyingi qadam)
        setTimeout(aiMove, 500); 
    }
}

function aiMove() {
    // AI oddiy random yurish qiladi (buni keyin kuchaytiramiz)
    console.log("AI o'ylamoqda...");
    renderBoard();
}

renderBoard();

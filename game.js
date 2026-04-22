const boardElement = document.getElementById('board');
let gameState = Array(8).fill(null).map(() => Array(8).fill(0));

function initGame() {
    // Daraja tugmalarini generatsiya qilish
    const levelsDiv = document.getElementById('levels');
    for(let i=1; i<=10; i++) {
        let btn = document.createElement('button');
        btn.innerText = "Lvl " + i;
        btn.onclick = () => setDifficulty(i);
        levelsDiv.appendChild(btn);
    }
    renderBoard();
}

function renderBoard() {
    boardElement.innerHTML = '';
    for(let r=0; r<8; r++) {
        for(let c=0; c<8; c++) {
            let cell = document.createElement('div');
            cell.className = 'cell ' + ((r + c) % 2 == 0 ? 'white' : 'black');
            boardElement.appendChild(cell);
        }
    }
}

initGame();

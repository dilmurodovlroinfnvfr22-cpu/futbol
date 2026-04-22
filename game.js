let board = Array(8).fill(null).map(() => Array(8).fill(0));
let selected = null;
let turn = 1; // 1: Player, 2: AI

// Menyuni yuklash
const levelsDiv = document.getElementById('levels');
for(let i=1; i<=10; i++) {
    let btn = document.createElement('button');
    btn.innerText = "Level " + i;
    btn.onclick = () => startGame(i);
    levelsDiv.appendChild(btn);
}

function startGame(level) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-container').classList.remove('hidden');
    initBoard();
    render();
}

function initBoard() {
    for(let r=0; r<8; r++) {
        for(let c=0; c<8; c++) {
            if((r+c)%2 !== 0) {
                if(r < 3) board[r][c] = 2; // AI
                else if(r > 4) board[r][c] = 1; // Player
            }
        }
    }
}

function render() {
    const b = document.getElementById('board');
    b.innerHTML = '';
    for(let r=0; r<8; r++) {
        for(let c=0; c<8; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell ' + ((r+c)%2 === 0 ? 'white' : 'black');
            cell.onclick = () => handleCell(r, c);
            if(board[r][c] !== 0) {
                const p = document.createElement('div');
                p.className = 'piece ' + (board[r][c] === 1 ? 'p1' : 'p2');
                if(selected && selected.r === r && selected.c === c) p.classList.add('selected');
                cell.appendChild(p);
            }
            b.appendChild(cell);
        }
    }
}

function handleCell(r, c) {
    if(turn !== 1) return;
    if(board[r][c] === 1) { selected = {r, c}; render(); }
    else if(selected && board[r][c] === 0) {
        let dr = Math.abs(selected.r - r);
        let dc = Math.abs(selected.c - c);
        
        // Oddiy yurish (1 katak)
        if(dr === 1 && dc === 1) {
            board[r][c] = 1; board[selected.r][selected.c] = 0;
            endTurn();
        } 
        // Yeyish (2 katak)
        else if(dr === 2 && dc === 2) {
            let midR = (selected.r + r) / 2;
            let midC = (selected.c + c) / 2;
            if(board[midR][midC] === 2) {
                board[r][c] = 1; board[midR][midC] = 0; board[selected.r][selected.c] = 0;
                endTurn();
            }
        }
    }
}

function endTurn() {
    selected = null;
    turn = 2;
    render();
    setTimeout(aiTurn, 500);
}

function aiTurn() {
    // AI oddiy logikasi (keyinchalik buni minimax bilan kuchaytiramiz)
    turn = 1;
    render();
}

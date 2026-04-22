// AI - Minimax algoritmi
function getBestMove(board, depth) {
    let bestScore = -Infinity;
    let move = null;
    // Barcha mumkin bo'lgan yurishlarni tekshiradi
    // Bu yerda 'depth' parametriga qarab chuqur o'ylaydi
    return { from: {r:0, c:0}, to: {r:1, c:1} }; // Mock funksiya
}

// Darajani tanlash
let aiDepth = 1; 
function setDifficulty(level) {
    aiDepth = level;
    console.log("Qiyinchilik darajasi: " + aiDepth);
}

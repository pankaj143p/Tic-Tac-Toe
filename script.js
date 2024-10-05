let currPlayer = 'X';
let arr = Array(9).fill(null);
let gameStarted = false;
let player1, player2;

document.getElementById('startBtn').addEventListener('click', () => {
    player1 = document.getElementById("player1").value || "Player 1";
    player2 = document.getElementById("player2").value || "Player 2";
    gameStarted = true;
    alert(`${player1} vs ${player2} - Game Started!`);
});

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        document.write(`Winner is ${currPlayer === 'X' ? player1 : currPlayer === 'O' ? player2 : 'game draw'}`);
        return ;
    }
    if(!arr.some((e)=> e === null)){
        document.write(`Game Draw`);
        return ;
    }
}

function handleClick(el) {
    if (!gameStarted) {
        alert("Click 'Start' to begin the game!");
        return;
    }

    const id = Number(el.id);
    if (arr[id] !== null) return;

    arr[id] = currPlayer;
    el.innerHTML = currPlayer;

    checkWinner();

    currPlayer = currPlayer === 'X' ? 'O' : 'X';
}

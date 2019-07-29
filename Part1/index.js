let gameProgress = [];
const play = (clicked) => {
    let clickedBox = document.getElementById(clicked);
    let playerSpan = document.getElementById('player');
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedBox.innerText = 'X';
        gameProgress[clicked] = 'X';
    }
    else {
        playerSpan.innerText = 'X';
        clickedBox.innerText = 'O';
        gameProgress[clicked] = 'O';
    };
    console.log(gameProgress);

    const topLeft = gameProgress[0];
    const topMiddle = gameProgress[1];
    const topRight = gameProgress[2];
    const middleLeft = gameProgress[3];
    const middle = gameProgress[4];
    const middleRight = gameProgress[5];
    const bottomLeft = gameProgress[6];
    const bottomMiddle = gameProgress[7];
    const bottomRight = gameProgress[8];

    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) { 
        alert(`Congrats! ${topLeft} is the winner!!!`);
    };
    if (topLeft !== undefined && topLeft === middle && topLeft === bottomRight) {
        alert(`Congrats! ${topLeft} is the winner!!!`);
    };
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`Congrats! ${topLeft} is the winner!!!`);
    };
    if (topMiddle !== undefined && topMiddle === middle && topMiddle === bottomMiddle) {
        alert(`Congrats! ${topMiddle} is the winner!!!`);
    };
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`Congrats! ${topRight} is the winner!!!`);
    };
    if (topRight !== undefined && topRight === middle && topRight === bottomLeft) {
        alert(`Congrats! ${topRight} is the winner!!!`);
    };
    if (middleRight !== undefined && middleRight === middle && middleRight === middleLeft) {
        alert(`Congrats! ${middleRight} is the winner!!!`);
    };
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        alert(`Congrats! ${bottomLeft} is the winner!!!`);
    };

    let boardFull = true;

    for(let i = 0; i < gameProgress.length; i++) {
        if (gameProgress[i] === undefined) {
        boardFull = false;
        };
    };
    if (boardFull === true) {
        alert(`Cat's!!!! It's a Tie!`);
    };
};
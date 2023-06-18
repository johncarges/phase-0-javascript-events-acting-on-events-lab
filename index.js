// Your code here
const dodger = document.getElementById("dodger");
const gameBoard = document.getElementById("game");

const gameWidthString = getComputedStyle(gameBoard)["width"].replace("px","");
const gameWidth = parseInt(gameWidthString, 10);

const dodgerWidthString = getComputedStyle(dodger)["width"].replace("px","");
const dodgerWidth = parseInt(dodgerWidthString, 10);

dodger.style.backgroundColor = "#FF69b4";

document.addEventListener("keydown", function (event){
    console.log(event);
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight();
    };
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `${left-1}px`;
    };
        
};

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left < 360) {
        // General - if (left < gameWidth-dodgerWidth)
        dodger.style.left = `${left+1}px`;
    };
}
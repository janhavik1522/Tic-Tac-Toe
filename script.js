let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msgContainer1 = document.querySelector(".msg-container1");
let msg1 = document.querySelector("#msg1");
let newGameBtn1 = document.querySelector("#new-btn1");

let turnO = true;

let count = 0;

let Player1 = "O";
let Player2 =  "X";

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer1.classList.add("drawhide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       count+=1;

       if(turnO) {
        box.innerText = "O";
        turnO = false;
       }
       else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
    
       checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    let winnerText = winner === "O" ? "Player 1" : "Player 2";
    msg.innerText = `🎉🎊Congratulations, Winner is ${winnerText}🎊🎉`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const drawGame = () => {
    msg1.innerText = `😢Game is Draw!😢`;
    msgContainer1.classList.remove("drawhide");
    disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
    if(count===9)
        {
            drawGame();
        }
};

newGameBtn1.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

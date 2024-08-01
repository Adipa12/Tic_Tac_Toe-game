let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn-reset");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.classList.add("O");
            box.classList.remove("X");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("X");
            box.classList.remove("O");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for (let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);               
            }
        }
    }   
};

const showWinner = (winner) => {
        msg.innerText =`congrtulations the winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        box.classList.remove("O");
        box.classList.remove("X");
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

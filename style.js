let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const comScorePara =document.querySelector("#com-score");

const getcomChoice = ()=>{
    let choiceArr =["rock","paper","scissors"];
    randomChoice=Math.floor(Math.random()*3);
    return choiceArr[randomChoice];
};

const drawGame = ()=>{
    message.innerText=`Draw! play again!`;
    message.style.backgroundColor = "#98D7C2";
};

const showWinner = (userWin,comChoice,choiceId)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText=`You Win! your ${choiceId} beats ${comChoice}`;
        message.style.backgroundColor = "#167D7F";
    }else{
        comScore++;
        comScorePara.innerText = comScore;
        message.innerText=`You Loss! your ${choiceId} get's beat by ${comChoice} `;
        message.style.backgroundColor = "red";
    }
};


const playGame = (choiceId)=>{
    const comChoice = getcomChoice();

    if(choiceId===comChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(choiceId==="rock"){
            userWin = comChoice ==="paper" ? false : true;
        }
        else if(choiceId === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }
        else{
            userWin = comChoice ==="rock" ? false : true;
        }
        showWinner(userWin,comChoice,choiceId);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId);
    });
});
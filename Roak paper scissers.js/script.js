let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userPara=document.querySelector("#user-Score");
const compPara=document.querySelector("#comp-Score");


const genCompChoise=()=>{
  let option = ["roak", "paper", "scissors"];
  let ranIdx = Math.floor(Math.random()*3);
  return option[ranIdx];
};

const drawGame = ()=>{
msg.innerText = "Game was draw Play again ! "
msg.style.backgroundcolor = "black";
};

const showWinner=(userWin , userChoice, compChoice)=>{
if(userWin){
  userScore++;
userPara.innerText = `you are win your ${userChoice} beat ${compChoice}`;
userPara.style.backgroundcolor = "green";
}else{
  compScore++;
  compPara.innerText = `you are lose ${compChoice} beat ${userChoice}`;
  compPara.style.backgroundcolor = "red"
}
};


const playGame = (userChoise)=>{

const compChoice = genCompChoise();

if(userChoise===compChoice){
  // draw game
drawGame();

}else{
  const userWin = true;
  if(userChoise="rock"){
    userWin == compChoice === "paper" ? false : true ;
  }else if(userChoise == "paper"){
    userWin == compChoice === "scissors" ? false : true;
  }else{
    userWin == compChoice === "rock" ? false : true;
  }
}
showWinner(userWin , userChoise , compChoice);
}

choices.forEach((choise)=>{
choise.addEventListener("click",()=>{
let userChoise = choise.getAttribute("id");
playGame(userChoise);
})
});
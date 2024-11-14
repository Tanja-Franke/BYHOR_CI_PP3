//Variables
const wordDisplay=document.querySelector("#wordcontainer");
const houseImage=document.querySelector("#housecontainer img");
const trackAttempts=document.querySelector("#trackingcontainer");
const gameModal=document.querySelector("#game-modal");
const playAgainBtn=document.querySelector(".play-again");
const inputWrong=document.querySelector("#alreadyguessed");
const submitAnswerBtn=document.querySelector("#submit");
const input=document.querySelector("#answerinput").value;
let guessesList=[];
//Initial variables
let currentWord, correctLetters, wrongLetters, hidden;
const maxAttempts=6;
//reset game function
const resetGame = () => {
    attemptsCount=0;
    houseImage.src="assets/images/housecontainerimages/house_0.png";
    trackAttempts.innerText=`Attempts: ${attemptsCount} / ${maxAttempts}`;
//Create blanks for the currentWord
    let hidden=[];
        for (let i=0;i<currentWord.length;i++){
        hidden[i]="__";
        }
    document.getElementById("current").innerHTML=hidden;
}

//handle win or lose
const gameOver = () => {
    if (attemptsCount===maxAttempts){
        alert("Sorry, <br> you lost!")
    }
}
//start game
const runGame = () => {
    const {word,hint}=bibleWordList[Math.floor(Math.random()*bibleWordList.length)];
    //set word and update hint
currentWord=word;
document.querySelector("#cue").innerText=hint;
resetGame ();
}
//check input
const checkAnswer = () => {
    if(!input.value){
        alert("Empty input. Please enter a letter");
        return;}
    //clear the input
    input.value="" ;
    //add wrong letter to guesses list
    guessesList.push(input);
    //update letter in currentWord
    let updatedWord="";
    let guessAllCorrect= true;
    for (let j = 0; j<hidden.length; j++) {
        if(input.includes(hidden[j])){
            updatedWord+=
            hidden[j] + " ";
        } else {
            guessAllCorrect=false;
        }
    }
}

//DOMContentLoad waiting for DOM to load before starting the game 
//(https://dev.to/obere4u/domcontentloaded-vs-windowonload-9mc, love maths walkthrough)
document.addEventListener('DOMContentLoaded', function () {
    runGame();
  });
  // add eventListener for buttons
submitAnswerBtn.addEventListener("clicked",checkAnswer());
playAgainBtn.addEventListener("clicked", runGame());

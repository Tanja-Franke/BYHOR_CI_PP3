//Variables
const wordDisplay=document.querySelector("#wordcontainer");
const houseImage=document.querySelector("#housecontainer img");
const trackAttempts=document.querySelector("#trackingcontainer");
const gameModal=document.querySelector("#game-modal");
const playAgainBtn=document.querySelector(".play-again");
const inputWrong=document.querySelector("#alreadyguessed");
//Initial variables
let currentWord, correctLetters, wrongLetters;
const maxAttempts=6;
//reset game function
const resetGame = () => {
    attemptsCount=0;
    houseImage.src="assets/images/housecontainerimages/house_0.png";
    trackAttempts.innerText=`Attempts: ${attemptsCount} / ${maxAttempts}`;
//Create blanks for the currentWord
wordDisplay.innerHTML=currentWord.split("_").map(() => `<div id="wordcontainer></div>`).join("");
}
//function get random word from list
const getRandomWord=()=>{
//picking random word and hint from word array
const {word,hint}=bibleWordList[Math.floor(Math.random()*bibleWordList.length)];
//set word and update hint
currentWord=word;
document.querySelector("#cue").innerText=hint;
resetGame()
}
//handle win or lose
const gameOver = (isVictory) =>{
    const modalShow=isVictory? `You have built your house on solid ground!`: `Your house just collapsed!`;
    gameModal.querySelector("h4").innerText = isVictory? 'Congratulations!' : 'Sorry!';
    gameModal.querySelector("p").innerText = `${modalShow}`;
    gameModal.classList.add("show");
   }
//handle game logic
let input= document.querySelector("#answerinput").value
const runGame = () => {
    //checking if the right letter is the currentWord
    if (currentWord.includes(input)) {
        //update letter if input is in the currentWord
        [...currentWord].forEach((letter,index)=>{
            if (letter===input) {
                correctLetters.push(letter);
                wordDisplay.querySelector("p")[index].innerText =letter;
                wordDisplay.querySelector("p")[index].classList.add("guessed");
            }
        });
    } else {
        // update wrong letters, attempts made and update the house image in terms of wrong guess
        attemptsCount ++; houseImage.src`assets/images/housecontainerimages/house_${attemptsCount}.png`;
        //update wrong letters
        inputWrong.querySelector("p").innerText=input;
        inputWrong.querySelector("p").classList.add("wrongguesses");
        //disabled wrong guesses
        let noNo=document.querySelector(".wrongguesses");
        noNo.disabled=true;
        //check if user wants to quit game (whether the user wins or loses)
        if (attemptsCount===maxAttempts) return gameOver(false);
        if (correctLetters.length===currentWord.length) return gameOver(true);
   }
}
//starting the game
getRandomWord();

gameOver();



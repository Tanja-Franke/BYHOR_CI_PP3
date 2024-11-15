//DOMContentLoad waiting for DOM to load before starting the game 
//(https://dev.to/obere4u/domcontentloaded-vs-windowonload-9mc, love maths walkthrough)
document.addEventListener('DOMContentLoaded', function () {
    resetGame();
    console.log("content loaded!")
});

//Variables
const wordDisplay = document.querySelector("#wordcontainer");
const houseImage = document.querySelector("#housecontainer img");
const trackAttempts = document.querySelector("#trackingcontainer");
const gameModal = document.querySelector("#game-modal");
const playAgainBtn = document.querySelector(".play-again");
const inputWrong = document.querySelector("#alreadyguessed");
const submitAnswerBtn = document.querySelector("#submit");
const input = document.querySelector("#answerinput");
let guessesList = [];
let wordArray = [];
let currentWord, correctLetters, wrongLetters, attemptsCount, newAttempt;
const maxAttempts = 6;
//function to resetGame
const resetGame = () => {
    attemptsCount = 0;
    houseImage.src = "assets/images/housecontainerimages/house_0.png";
    trackAttempts.innerText = `Attempts: ${attemptsCount} / ${maxAttempts}`;
    getRandom();
    };
const getRandom = () => {
    const { word, hint } = bibleWordList[Math.floor(Math.random() * bibleWordList.length)];
    console.log(word, hint);
    //set to show word and hint
    currentWord = word;
    document.querySelector("#cue").innerText = hint;
    //create blanks for the searched word
    for (let i = 0; i < currentWord.length; i++) {
        wordArray += "_ ";
        document.getElementById("current").innerHTML = wordArray;
    }
};
//Code snipped adapted from 
//https://www.geeksforgeeks.org/word-guessing-game-using-html-css-and-javascript/

const playGame = () => {
    // To check empty input
    if (!input.value) {
        alert("Empty Input box. Please add input letter");
        return;
    }

    let letter = input.value.toLowerCase();

    // Clear the input field
    input.value = "";

    // Check if the letter has already been guessed
    if (guessesList.includes(letter)) {
        alert("You have already guessed that letter! Try with another one.");
        return;
    }

    // Add the letter to the guessed letters array
    guessesList.push(letter);
   
    //Show letter in guessesList container
    document.getElementById("guessed").innerHTML = letter;

    // Update the word display based on the guessed letters
    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let a = 0; a < currentWord.length; a++) {
        if (guessesList.includes(currentWord[a])) {
            updatedDisplay += currentWord[a] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
            attemptsCount++;
}
        }
    document.getElementById("current").textContent = updatedDisplay;
        document.querySelector("#trackingcontainer p").innerHTML= `Attempts: ${attemptsCount}/ ${maxAttempts}`;
    // Check if all letters have been guessed
    if (allLettersGuessed) {
        alert(`Congratulations! You build your house on solid ground! You guessed: ${currentWord} !`);
        }
    };
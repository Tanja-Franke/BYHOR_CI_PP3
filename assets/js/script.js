//DOMContentLoad waiting for DOM to load before starting the game 
//(https://dev.to/obere4u/domcontentloaded-vs-windowonload-9mc, love maths walkthrough)
document.addEventListener('DOMContentLoaded', function () {
    resetGame();
    console.log("content loaded!");
});

//Variables
/*jshint esversion: 6 */

const wordDisplay = document.querySelector("#current");
const houseImage = document.querySelector("#housecontainer img");
const trackAttempts = document.querySelector("#trackingcontainer b");
const input = document.querySelector("#answerinput");
let guessesList = [];
let wordArray = [];
let currentWord, attemptsCount;
const maxAttempts = 6;
//function to resetGame
const resetGame = () => {
    attemptsCount = 0;
    houseImage.src = "assets/images/housecontainerimages/house_0.png";
    trackAttempts.innerText = `Attempts: ${attemptsCount} / ${maxAttempts}`;
    getRandom();
    //create blanks for the searched word
    for (let i = 0; i < currentWord.length; i++) {
            wordArray += "_ ";
            wordDisplay.innerHTML = wordArray;
        }
};
// get random word from external js file with array called bibleWordList
const getRandom = () => {
    const { word, hint } = bibleWordList[Math.floor(Math.random() * bibleWordList.length)];
    console.log(word, hint);
    //set to show word and hint
    currentWord = word;
    document.querySelector("#cue").innerText = hint;

};
//Code snipped adapted from 
//https://www.geeksforgeeks.org/word-guessing-game-using-html-css-and-javascript/
/*jshint esversion: 6 */
//as suggested in https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const 
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
            attemptsCount=0;
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
            }
        }
    document.getElementById("current").textContent = updatedDisplay;
    //if letter guess wrong
    if(!allLettersGuessed){
        attemptsCount++;
        console.log(attemptsCount);
        houseImage.src=`assets/images/housecontainerimages/house_${attemptsCount}.png`;
    }
    trackAttempts.innerText= `Attempts: ${attemptsCount}/ ${maxAttempts}`;
    // Check if all letters have been guessed
    if (allLettersGuessed) {
        alert(`🎉 Congratulations! You build your house on solid ground! You guessed: ${currentWord} !`);

        } else if (attemptsCount==maxAttempts){
            alert("😢 Sorry, your house collapsed. Try to rebuild your house on solid ground.");
        }
    };

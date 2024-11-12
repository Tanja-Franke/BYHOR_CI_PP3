//Variables
const wordDisplay=document.querySelector("#wordcontainer");
const houseImage=document.querySelector("#housecontainer img");
const trackAttempts=document.querySelector("#trackingcontainer")
//Initial variables
let currentWord, correctLetters, wrongLetters;
const maxAttempts=6;

const resetGame = () => {
    wrongGuessCount=0;
    houseImage.src="assets/images/housecontainerimages/1house_sun.png";
    trackAttempts.innerText='${wrongGuessCount} / ${maxAttempts}';
//Create blanks for the currentWord
wordDisplay.innerHTML=currentWord.split("_").map(() => `<div id="wordcontainer></div>`).join("");
}
//function get random word from list
const getRandomWord=()=>{
//picking random word and hint from word array
const {word,hint}=bibleWordLis[Math.floor(Math.random()*bibleWordList.length)];
//set word and update hint
currentWord=word;

}

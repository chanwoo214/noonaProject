//Select Random number
//User inputs a number and press go
//If user guesses the correct number, output Correct!
//Random number < User input output Down!
// Random number > User input output Up!
//When Reset button is clicked, game resets
//Game ends after 5 tries. (no more tries and button is disabled)
//If user inputs outside of range (1 ~ 100) then let them know. Also the number of try count does not change.
//If user inputs the same number, let them know and count does not change.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1; // Math.random only pulls 0 - 99 so we have added 1 to set the range 1 - 100
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    if (userValue < computerNum) {
        resultArea.textContent = "UP!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN!!"
    } else {
        resultArea.textContent = "CORRECT!!"
    }

}
pickRandomNum();
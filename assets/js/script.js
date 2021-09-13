// Modal pop up open and close for rules

document.getElementById('how--to').addEventListener("click", function() {
    document.querySelector('.pop__out__modal').style.display = "flex";
});

document.querySelector('.close--button').addEventListener("click", function() {
    document.querySelector('.pop__out__modal').style.display = "none";
});

//  The below will call the modal pop up to display the result an possibly the score and close it

document.getElementById('result__display').addEventListener("click", function() {
    document.querySelector('.result__modal').style.display = "flex";
});

document.querySelector('.close--result').addEventListener("click", function() {
    document.querySelector('.result__modal').style.display = "none";
});

// Variables for computers choice , result and scores

let computerPicked = computerPick();
let result;
let scores;


/**
 * Function to generate a random number to assign to computer game choice
 */

function computerPick() {

    let computerPicked = Math.floor(Math.random() * 5);

    if (computerPicked === 1) {
        return 'rock';
    } else if (computerPicked === 2) {
        return 'paper'
    } else if (computerPicked === 3) {
        return 'scissors';
    } else if (computerPicked === 4) {
        return 'lizard';
    } else if (computerPicked === 5) {
        return 'spock';
    } else {
        return 'error'
    }
}

/**
 * This function decides the outcome and displays the result in a results modal
 */


function getTheResult(userPicked) {

    if (userPicked === computerPicked) {
        result = 'Its a draw, go again!';

    } else {

        if (userPicked === 'rock' && (computerPicked === 'scissors' || computerPicked === 'lizard')) {
            result = 'You win';
        } else if (userPicked === 'paper' && (computerPicked === 'rock' || computerPicked === 'spock')) {
            result = 'You win';
        } else if (userPicked === 'paper' && (computerPicked === 'rock' || computerPicked === 'spock')) {
            result = 'You win';
        } else if (userPicked === 'scissors' && (computerPicked === 'paper' || computerPicked === 'lizard')) {
            result = 'You win';
        } else if (userPicked === 'lizard' && (computerPicked === 'spock' || computerPicked === 'paper')) {
            result = 'You win';
        } else if (userPicked === 'spock' && (computerPicked === 'scissors' || computerPicked === 'rock')) {
            result = 'You win';
        } else {
            result = 'You lose!'
        }
    }
    userPick(userPicked);
    computerPick(computerPicked);
    gameResult(result);
    scoreUpdate(scores)
    return result;
}

function userPick(userIcon) {
    const usersChoice = document.getElementById("user-pick");
    usersChoice.innerHTML = userIcon;
}
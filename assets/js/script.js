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

document.querySelector('#play--again ').addEventListener("click", function() {
    document.querySelector('.result__modal').style.display = "none";
});



// Variables for computers choice , result and scores


let result;
let scores = 0;


/**
 * Function to generate a random number to assign to computer game choice
 */

function computerPick() {

    let computerPicked = Math.ceil(Math.random() * 5);

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

    let computerPicked = computerPick();

    if (userPicked === computerPicked) {
        result = 'Its a draw, we go again!';

    } else {

        if (userPicked === 'rock' && (computerPicked == 'scissors' || computerPicked == 'lizard')) {
            increaseScore();
            result = 'You win';

        } else if (userPicked === 'paper' && (computerPicked == 'rock' || computerPicked == 'spock')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'paper' && (computerPicked == 'rock' || computerPicked == 'spock')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'scissors' && (computerPicked == 'paper' || computerPicked == 'lizard')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'lizard' && (computerPicked == 'spock' || computerPicked == 'paper')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'spock' && (computerPicked == 'scissors' || computerPicked == 'rock')) {
            increaseScore()
            result = 'You win';;
        } else {
            decreaseScore()
            result = 'You lose!'

        }
    }
    userPick(userPicked);
    computerIcon(computerPicked);
    endResult(result);
    return result;
}

function userPick(userIcon) {
    const usersChoice = document.getElementById("user-pick");
    usersChoice.innerHTML = userIcon;
}

function computerIcon(computerIcon) {
    const computersChoice = document.getElementById('computer-pick');
    computersChoice.innerHTML = computerIcon;
}

function endResult(gameResult) {
    const gameFinished = document.getElementById('result');
    gameFinished.innerHTML = gameResult;
}




/**
 * Increses either player score by one if they win
 */
function increaseScore() {
    let newScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++newScore;

    if (newScore === 6) {
        document.getElementById("user-score").innerText = 0;
        alert('You win')
    }
}
/**
 * gets current loss from the DOM and increases it by one
 */
function decreaseScore() {
    let LosingScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++LosingScore;
}
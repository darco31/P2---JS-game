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

//Close final result modal

document.querySelector('.close--final').addEventListener("click", function() {
    document.querySelector('.win__modal').style.display = "none";
});

document.querySelector('.close--lose').addEventListener("click", function() {
    document.querySelector('.lose__modal').style.display = "none";
});



// Variables for computers choice , result and scores

let result;

/**
 * Function to generate a random number to assign to computer game choice
 */


function computerPick() {

    let computerPicked = Math.ceil(Math.random() * 5);

    switch (computerPicked) {

        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        case 4:
            return 'Lizard';
        case 5:
            return 'Spock';
        default:
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

        if (userPicked === 'Rock' && (computerPicked == 'Scissors' || computerPicked == 'Lizard')) {
            increaseScore();
            result = 'You win';

        } else if (userPicked === 'Paper' && (computerPicked == 'Rock' || computerPicked == 'Spock')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'Paper' && (computerPicked == 'Rock' || computerPicked == 'Spock')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'Scissors' && (computerPicked == 'Paper' || computerPicked == 'Lizard')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'Lizard' && (computerPicked == 'Spock' || computerPicked == 'Paper')) {
            increaseScore()
            result = 'You win';

        } else if (userPicked === 'Spock' && (computerPicked == 'Scissors' || computerPicked == 'Rock')) {
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
 * Resets all scores for all players
 */

function resetScores() {
    document.getElementById('user-score').innerText = 0;
    document.getElementById('computer-score').innerText = 0;
}


/**
 * Increses either player score by one if they win
 */
function increaseScore() {
    let newScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++newScore;

    if (newScore >= 5) {
        document.querySelector('.win__modal').style.display = "flex";
        document.getElementById('win').innerHTML = 'Congratulations! You Won';
        document.querySelector('#play--again').style.display = "none";
    }
}
/**
 * gets current loss from the DOM and increases it by one
 */
function decreaseScore() {
    let losingScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++losingScore;

    if (losingScore >= 5) {
        document.querySelector('.lose__modal').style.display = "flex";
        document.getElementById('lose').innerHTML = 'BAZINGA!  You Lost';
        document.querySelector('#play--again').style.display = "none";
    }
}


if (resetScores) {
    document.querySelector('.reset-button ').addEventListener("click", function() {
        document.querySelector('#play--again').style.display = "flex";
    });
}
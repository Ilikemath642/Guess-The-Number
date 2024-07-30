let targetNumber;
let guessesLeft = 5;
let gameMode;

function selectMode(mode) {
    gameMode = mode;
    if (mode === 'ai') {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        document.getElementById('start-game').style.display = 'none';
        document.getElementById('guess-game').style.display = 'block';
        document.getElementById('message').textContent = `Guess the AI's number between 1 and 100. You have ${guessesLeft} guesses left.`;
    } else {
        document.getElementById('mode-selection').style.display = 'none';
        document.getElementById('start-game').style.display = 'block';
        document.getElementById('message').textContent = 'Friend, enter a number for the other player to guess.';
    }
}

function startGame() {
    const numberInput = document.getElementById('number-input').value;
    if (numberInput === '') {
        alert('Please enter a number.');
        return;
    }
    
    targetNumber = parseInt(numberInput, 10);
    guessesLeft = 5;

    document.getElementById('start-game').style.display = 'none';
    document.getElementById('guess-game').style.display = 'block';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('message').textContent = `You have ${guessesLeft} guesses left.`;
}

function makeGuess() {
    const guessInput = document.getElementById('guess-input').value;
    if (guessInput === '') {
        alert('Please enter a guess.');
        return;
    }

    const guess = parseInt(guessInput, 10);
    if (guess === targetNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the number!';
        document.getElementById('play-again').style.display = 'block';
        document.getElementById('guess-game').style.display = 'none';
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            document.getElementById('message').textContent = `Game over! The number was ${targetNumber}.`;
            document.getElementById('play-again').style.display = 'block';
            document.getElementById('guess-game').style.display = 'none';
        } else {
            document.getElementById('message').textContent = `Incorrect guess. You have ${guessesLeft} guesses left.`;
        }
    }
}

function restartGame() {
    document.getElementById('mode-selection').style.display = 'block';
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('guess-game').style.display = 'none';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('number-input').value = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('message').textContent = 'Choose a game mode to start!';
}

'use strict';
//This code creates the random number for the secret number variable.
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//This code stores the value in the code, not the DOM. 
//Part of the application state
let score = 20;

//This is the variable for the check button. We will reference this when we add event listener below
const check = document.querySelector('.check');

const again = document.querySelector('.again');

const highScore = document.querySelector('.highscore');

document.querySelector('.number').textContent = '?';

//This function will reset the entire game

const reset = function(){
    let guess = document.querySelector('.guess').value;


secretNumber = Math.trunc(Math.random() * 20 + 1);

    if(guess > 0){
       
        if(document.querySelector('.score').textContent > highScore.textContent){
            highScore.textContent = document.querySelector('.score').textContent; 
        } 
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    score = 20;
    //this code below makes sure that we are changing the value using the DOM
    document.querySelector('.guess').value = '';
    console.log(guess);
}

}

//Add event listener to the again button and provide code.
again.addEventListener('click',reset);




check.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


//Checking when score is greater than 1
    if (score >= 1) {
        //checking if there is no guess
   if (!guess) {
        document.querySelector('.message').textContent = '🚩No number!';    
        //checking if guess is equal to secret number
        //this code will display a message that says correct 
        //number, along with changing the background color and the width
    } else if (guess === secretNumber){
    document.querySelector('.message').textContent = '🎉Correct Number!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;


    } else if (guess > secretNumber){
    document.querySelector('.message').textContent = '📈Too high!';
    score--;
    document.querySelector('.score').textContent = score;
    /*This checks to see if the guess is less than the secret number.
    If so, it will display a message and decrease the score */
} else if (guess < secretNumber){
    document.querySelector('.message').textContent = '📉Too low!';
    score--;    
    document.querySelector('.score').textContent = score;
    }
    }

    if (score === 0){
    document.querySelector('.message').textContent = 'You lost the game!';
    score = 0;
    document.querySelector('.score').textContent = score;
}});
//end of event listener for check


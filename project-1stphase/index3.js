console.log(parseInt(Math.random()*100+1))   //parseInt will print integer value only

let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber)
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(event)
{
    event.preventDefault();
    const guess = parseInt(userInput.value)
    if (validateGuess(guess) == 1)
    {
        console.log("Good guess")
    }else{
        console.log("Not a good gues")
    }

    
});
}
function validateGuess(guess)
{
    if(isNaN(guess) || guess<1 || guess>100)
    {
        alert("Please Enter a valid number")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Game over. The correct number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
     
}
function checkGuess(guess)
{
    if(guess === randomNumber)
    {
        displayMessage("You have enter the correct guess");
        endGame();
    }else if (guess <randomNumber)
    {
        displayMessage("Number is Low. Guess some high digits 😒");
    }
    else if(guess >randomNumber)
    {
        displayMessage("number is too high");
    }
}
function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess ++;
    remaining.innerHTML = `${11-numGuess}`

}
function displayMessage(message)
{
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}
function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> start New Game</h2>`
    startOver.appendChild(p);
    playGame= false;
    newGame();
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}

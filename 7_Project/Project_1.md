# Project Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=index.html)

# Solution Code

## Project 1 [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=1-colorChanger%2Fchaiaurcode.js)

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);

    switch(event.target.id){
      case "grey":
      case "white":
      case "blue":
      case "yellow":
      case "purple":

      body.style.backgroundColor = event.target.id;
      break;
    }
    // second option to write the function
     
    // if(event.target.id === "grey"){
    //   body.style.backgroundColor == event.target.id;
    // }
  })

});
```

## Project 2 [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=2-BMICalculator%2Fchaiaurcode.js)

``` javascript
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault();


  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Give a valid height ${height}`;
  }
  else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Give a valid weight ${weight}`;
  }
  else{
    const BMI = (weight / ((height)* (height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }

})
```

## Project 3 [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?3-DigitalClock%2Fchaiaurcode.js)

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock'); 

setInterval(()=>{
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=4-GuessTheNumber%2Fchaiaurcode.js)

```javascript

let RandomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const previosuGuesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let PlayGame = true;

if(PlayGame){
  submit.addEventListener('click', (event) => {
    event.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);
    ValidateGuess(guess);
  }); 
}

function ValidateGuess(guess){
  if(isNaN(guess)){
    alert("please enter a valid number");
  }else if(guess < 1){
    alert("please enter a number greater than 1");
  }else if(guess > 100){
    alert("please enter a number less than 100");
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${RandomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      CheckGuess(guess);
    } 
  }
}

function CheckGuess(guess){
  if(guess === RandomNumber){
    displayMessage(`You Guessed it  right`);
    endGame();
  }
  else if(guess < RandomNumber) {
    displayMessage(`You number is TOOOOO low`);
  }
  else if(guess > RandomNumber){
    displayMessage(`You number is TOOOOO high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  previosuGuesses.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''; 
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "new-game">NEW GAME</h2>`;
  startOver.appendChild(p);
  PlayGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#new-game');
  newGameButton.addEventListener('click', (event) => {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    previosuGuesses.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    PlayGame  = true; 
  });  
}

```
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

## Project 3 [Click Here]()
# Project Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=index.html)

# Solution Code

## Project 1 [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css)

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
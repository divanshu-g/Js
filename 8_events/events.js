// document.getElementById('owl').onclick = () =>{
//     alert("you clicked owl image");
// }

// attachEvent() was used in times of internet explorer
// In JQuery - on was used 

// document.getElementById('owl').addEventListener('click', (event) => {
//     console.log(event);
// }, false);

/****************Topics to study****************************** */

// type, timestamp, defaultPrevented
// target, toElemnt, sourceElement, currentTarget
// clinetX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

/**********EVENT PROPOGATION********** */

// document.getElementById('images').addEventListener('click', (event) => {
//     console.log("CLICKED INSIDE THE ul");
// }, false);

// document.getElementById('owl').addEventListener('click', (event) => {
//     console.log("CLICKED OWL");
//     // event.stopPropagation();
// }, false);

// if false and false then event bubbling
// if true and true thats event Capturing

/*******************How to prevent propogation****************************/

document.getElementById('google').addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('YOU CLICKED ON GOOGLE!!!!!!!!');
}, false)


/*******************How to remove objects******************************* */


document.querySelector('#images').addEventListener('click', (event)=>{
    console.log(event.target.tagName);

    if(event.target.tagName === 'IMG'){
        console.log(event.target.id);
        let removeImages = event.target.parentNode;
        removeImages.remove();
    }  
    
    // removeImages.parentNode.removeChild(removeImages); 2nd way to remove object

}, false)
## ABOUT ASYNC JS EVENT LOOP DIAGRAM [CLICK HERE](https://excalidraw.com/#json=MHy8JbxPBrkfWbAiH2kan,3gQFxq9WRv0SayHckutF-g)

# PROJECTS

## Async PROJECT 6 [CLICK HERE](https://stackblitz.com/edit/dom-project-chaiaurcode-9r6hnjoh?file=6-unlimitedColors%2Fchaiaurcode.js)

```javascript

const changeColor = ()=>{
  const hex = '123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID = null;

// Starting change of color

const startChangingColor = ()=>{
  if(!intervalID){
    intervalID = setInterval(ChangeBgColor, 1000);
  }

  function ChangeBgColor(){document.body.style.backgroundColor = changeColor();}
}

// Stoping change of color
const StopChangingColor = ()=>{
  clearInterval(intervalID);
  intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', StopChangingColor);

```

## ASYNC PROJECT 5[CLICK HERE]()
```javascript

const insert = document.querySelector("#insert");

window.addEventListener('keydown', (event)=>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${event.key === ' ' ? 'space' : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>

</table>
  </div>
  `
})

```

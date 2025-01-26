const timeOut = () => {
    // console.log("divanshu");
}
setTimeout(timeOut, 2000);

/************************************************ */


const ChangeHeading = () =>{
    document.querySelector('h1').innerHTML = "Striver best in DSA";
}

const ChangeNameTimeOut = setTimeout(ChangeHeading, 2000);

document.querySelector('#stop').addEventListener('click', ()=>{
    clearTimeout(ChangeNameTimeOut);
    console.log("STOPPED");
})

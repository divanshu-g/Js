let IntervalId = null;

const SayDate = (str)=>{
    console.log(str, Date.now());
}


document.querySelector("#start").addEventListener('click', ()=>{
    if(!IntervalId){
        IntervalId = setInterval(SayDate, 1000, 'hi');
        console.log("Started");
    }    
})

document.querySelector("#stop").addEventListener('click', ()=>{
    clearInterval(IntervalId);
    IntervalId = null;
    console.log("Stopped");
})
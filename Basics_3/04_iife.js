// IIFE - IMMEDIATLEY INVOKED FUNCTION EXPRESSIONS

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB IS CONNECTED ${name}`)
})("divanshu");

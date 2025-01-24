//covered in control flow ~ basic if else, && ||, switch case and rest written
const temp = 61;

// if(temp < 50){
//     console.log("temperature is less than 50");
// }
// else{
//     console.log(`temperature is ${temp}`);
// }

/**************************/

// falsy Values ~ false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy Values ~ "0", "false", " ", [], {}, function(){}


/**********************************/
const userEmail = [];  

if(userEmail.length == 0){
    // console.log("empty array");
}

const EmptyObj = 0;

if(Object.keys(EmptyObj).length == 0){
    // console.log("Empty object");
}


/************************* */

// false == '0': true
// false == '' : true
// 0 == ''     : true

/************************************ */

// Nullish Coalescing Operator(??): null undefined


let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 23;

// console.log(val1);

/*************TERNARY OPERATOR************* */

// condition ? truth : false;
const iceTea = 100;
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");



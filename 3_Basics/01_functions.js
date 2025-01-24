function SayMyName() {
    console.log("D");
    console.log("I");
    console.log("V");
}

// SayMyName();
/**************************************/ 

// function AddTwoNum(num1, num2){
//     console.log(num1 + num2);
// }

// function AddTwoNum(num1, num2){
//     // let result = num1 + num2;
//     // return result;

//     return num1 + num2;
// }


// const result = AddTwoNum(3, 4);
// console.log("Result: " + result);

// ********************************************

function loginUserName(username){
    if(!username){
        console.log("Not valid username");
        return;     
    }
    return `${username} just logged in`;
}

// console.log(loginUserName("Divanshu"));


/*********************Functions With Objects***************************** */ 
// 1st

// function CalculateCartPrice(val1, val2, ...num1){
//     return num1;
// }

// console.log(CalculateCartPrice(200, 500, 800));
// ...num1 is spread operator means it will expand the arr num1 

// 2nd

const user = {
    username: "Divanshu",
    userage: 21
}

function handleObject(anyObj){
    console.log(`User name is ${anyObj.username} and age is ${anyObj.userage}`);
    // console.log(`${anyObj.user}`);

}
// handleObject(user); 

// handleObject({
//     username: "Dhruv",
//     userage: 20
// })


// 3rd

const myArray = [200, 300, 500];

function getSecondVal(array){
    return array[1];
}
console.log(getSecondVal(myArray));
console.log(getSecondVal([100, 200 , 400, 700]));
const user = {
    username: "divanshu",
    subscription: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this);

function div(){
    let username = "guri";
    console.log(this.username);
}
div();

/**************arrow********************** */


const guri = ()=>{
    let username = "divanshu";
    console.log(this.username);
}
guri();

// different notations to wrtie a arrow function
const sum = (num1, num2) =>{
    return num1 + num2;
}
const addTwo = (num1, num2) => num1 +  num2 
const sumTwo = (num1, num2) =>(num1 + num2);
const twoSum = (num1, num2) =>({username: "divanshu"})

// console.log("1. " + sum(5,7));
// console.log("2. " + addTwo(5,7));
// console.log("3. " + sumTwo(5,7));
// console.log(twoSum(5,7))
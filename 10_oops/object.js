// String/Array -> object -> null
// function is also a object which points to null(c drive or the end point)

function mupltiplyBy5(num){
    return num * 5;
}

mupltiplyBy5.power = 2;
console.log(mupltiplyBy5(5));
console.log(mupltiplyBy5.power);
console.log(mupltiplyBy5.prototype);

/********************************************* */

function createUser(username, price){
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.price++;
}
createUser.prototype.printMe = function(){
    console.log(`Price is: ${this.price}`);
}

const chai = new createUser("chai", 20);
const tea = new createUser("Boba Tea", 250);

chai.printMe();

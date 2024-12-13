// Stack (Primitive)

// let firstname = "Divanshu";

// let anothername = firstname;
// anothername = "Guri";

// console.log(firstname);
// console.log(anothername);

// Heap (Non-Primitve)

let userOne = {
    email: "userOne@gamil.com",
    upi: "userone@hdfcbank"
}

let userTwo = userOne;
// console.log(userTwo);

userTwo.email = "tmkc@gmai.com";

console.log(userOne.email);
console.log(userTwo.email);

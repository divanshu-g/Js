// let myDate = new Date(); // Date is object type 
// console.log(myDate);

// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myPrevDate = new Date(2023, 0, 123);
// let myPrevDate = new Date("2023-05-30");
let myPrevDate = new Date("06-12-2024");
// console.log(myPrevDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myPrevDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
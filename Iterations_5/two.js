/****for of******/

const arr = [1, 2, 3, 4 , 5];

for (const nums of arr) {
    // console.log(nums); 
}

/****** string for of***********/

const greeting = "Hello world";

for (const greet of greeting) {
    // if(greet == " ") continue;
    // console.log(`Each char is ${greet}`);   
}

/********MAP**********/

const map = new Map();
map.set("IN", "India");
map.set("CN", "China");
map.set("JP", "Japan");

for(const key of map){
    // console.log(`Country ${key}`);
}
for(const [key, value] of map ){
    // console.log(key, "->", value);
}


// object

const myObj = {
    'game1': "God Of War",
    'game2': "RDR2",
    'game3': "Spiderman"
}

for(const [key, value] of myObj){
    console.log(key, "->", value);
}
// for of doesn't work for objects
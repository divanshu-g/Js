// singleton
// object.create topic in further videos

const mySymbol = Symbol("key1");
// object literal
const  JsUser ={
    name: "Divanshu",
    "full name": "Divanshu Garg",
    [mySymbol]: "UserKey1",
    age: 21,
    location: "Noida",
    email: "divanshu20@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]); 

// JsUser.email = "esehikoi@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "chatgptkabhai@gmail.com";
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
}

JsUser.greetingstwo = function(){
    console.log(`Hello JS user ${this.name}`);
}


console.log(JsUser.greetingstwo());

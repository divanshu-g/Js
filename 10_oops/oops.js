/***************object literal************************ */

const user ={
    username: "Divanshu",
    LoggedIn: 7,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Got detials from user database: \n Username: ${this.username} \n Login: ${this.LoggedIn} \n SignIn: ${this.signedIn}`);
    }
}
//if used with an object 'this' will give info about object literal
// if used globally 'this' will give {} while if we console.log on chorome console 'this' will give outer lexical scope

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

/******************CONSTRUCTOR*************************************** */

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this.username;
}

const userOne = new User("Divanshu", 7, true);
const userTwo = new User("Guri", 10, false);
console.log(userOne);
console.log(userTwo);

/*
While using 'new' an empty object is created called instance 
constructor function called due to 'new'
all the argument written gets injected into 'this' 
*/
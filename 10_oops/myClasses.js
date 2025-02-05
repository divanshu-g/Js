// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abdfkpm`;
//     }
//     ChangeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("Badmos", "badmosinimitrr@gmail.com", "35464");
// console.log(newUser.encryptPassword());
// console.log(newUser.ChangeUsername());

/*****behind the scene******/ 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password; 
}
User.prototype.encryptPassword = function(){
    return `${this.password}abdfkpm`;
}
User.prototype.ChangeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const random = new User("Sood", "Sood@neilson.com", "3457");

console.log(random.encryptPassword());
console.log(random.ChangeUsername());
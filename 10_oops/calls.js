function SetUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const newUser = new createUser("divanshu", "divanshu@goldmansachs.com", "123");
console.log(newUser);
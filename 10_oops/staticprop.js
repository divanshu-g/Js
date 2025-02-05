class  User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`;
    }
}

const naam = new User("divanshu Garg");
// console.log(naam.createID());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}
const samsung = new Teacher("potato", "potato@yt.com")
console.log(samsung.createID())
class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`This course was added by ${this.username}`)
    }
    
}

const random = new Teacher("divanshu", "divanshu@youtube.com", "35467924");
random.logMe()

/************************************* */

const applicant = new User("divanshug")
applicant.logMe();

// console.log(random === Teacher);
console.log(random instanceof Teacher);
console.log(random instanceof User)


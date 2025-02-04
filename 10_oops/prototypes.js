let superHero = ["spiderman", "hulk"];

let superPower = {
    hulk: "punch",
    spiderman: "Sling",

    getSpiderman: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.div = function(){
    console.log(`div is present in all objects`);
}
Array.prototype.spider = function(){
    console.log(`spider swings`);
}

// superPower.div();
// superHero.div();
// superHero.spider();

// if we are injecting prototype function in array than it can't be accessed by function or string and won't passed down to object
// superPower.spider();


/************************Inheritance*************************** */
const user = {
    name: "guri",
    email: "guri@google.com"
}

const Teacher = {
    makeVideos: true
}
const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS Assignments',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = user;
// modern Syntax
Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUsername = "Divanshu Garg      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength();
"Guri   ".trueLength();
"Swastik".trueLength();
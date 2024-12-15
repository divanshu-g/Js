// // const instagram = new Object();// this is a singleton object
const instagram = {};

instagram.id = "123abcd";
instagram.user = "Samul";
instagram.isLoggedIn = false; 

// console.log(instagram);

const regularUser = {
    email: "user@gmail.com",
    fullname:{
        username:{
            firstname: "divanshu",
            lastname: "garg"
        } 
    }
}

// console.log(regularUser.fullname.username.firstname);

// const obj1 = {1:"a", 2: "b"};
// const obj2 = {3:"c", 4: "d"};

// // const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
// const obj4 = {...obj1, ...obj2};

// console.log(obj3);
// console.log(obj4);

const users = [
    {

    },
    {

    },
    {

    },
    {

    }
]

// users[1].email
// console.log(instagram)
// console.log(Object.keys(instagram));
// console.log(Object.values(instagram));
// console.log(Object.entries(instagram));

// console.log(instagram.hasOwnProperty('isLoggedIn'));



/*************   OBJECT DE-STRUCTURING    ***********/

const course = {
    courseName: "Js mastery",
    price: "999",
    courseInstructor: "Hitesh" 
}


const {courseInstructor: traine} = course;
console.log(traine);



// Same de-structuring
// const navbar = ({company}) =>{

// }

// navbar(company = "Divanshu")
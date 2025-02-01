// const promiseOne = new Promise((resolve, reject)=>{
//     // Do any Async task~ DB Calls, Cryptograpghy, network

//     setTimeout(()=>{
//         console.log("Task is completed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(()=>{
//     console.log("Task is consumed");
    
// })

/************************************************** */

// new PromiseTwo((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task 2");
//         resolve();
//     }, 1000)
// }).then(()=>{
//     console.log("Promise fullfilled");
// })

/********************************************************** */

// const PromiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({
//             uername: 'divanshu-g',
//             email: 'garg20divanshu@gmail.com'
//         })
//     },1000)
// })

// PromiseThree.then((user)=>{
//     console.log(user);
// })

/********************************************************/

// const PromiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({
//                 username: 'divanshu',
//                 password: '0320'
//             })
//         }
//         else{
//             reject("Error: Something went wrong");
//         } 
//     }, 1000);
// })

// PromiseFour.
// then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })

/****************************************************************** */

// const PromiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({
//                 username: 'Javascript',
//                 password: '0320'
//             })
//         }
//         else{
//             reject("Error: JS went wrong");
//         } 
//     }, 1000);
// });

// async function consumePromiseFive(){
//     try{
//         const response = await PromiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();

/********************************************************** */

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);   
//     }
//     catch (error) {
//         console.log('E: ', error);
//     }
// }
// getAllUsers();

/******************************************************************************* */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log('E:',error));
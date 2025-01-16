var c = 300

if(true){
    let a = 20;
    const  b= 40;
    var c = 30;
}
c = 200

// console.log({a,b,c});
// console.log(a);// a is not defined coz a is a local scope of 
// console.log(b);// same for b
// console.log(c);// but var doesn't consider scope

/****************************************************** */


function one(){
    const username = "divanshu";

    function two(){
        const website = "youtube";
        console.log(username)
    }
    // console.log(website);//this will give error as it was a local var for function two

    two();
}

// one();

/********************************** */

if(true){
    const username = "divanshu"
    if(username == "divanshu"){
        const website = "youtube"
        // console.log(username + " using " + website);
    }
    // console.log(website)
}
// console.log(username)


/********Interesting*********/

addOne(4);
function addOne(num){
    return num + 1;
}

//

addTwo(4);//can't excess before intialization
const addTwo = function(num){
    return num + 2;
}
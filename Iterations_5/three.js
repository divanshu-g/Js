/********For in**********/

const obj = {
    cpp: "c++",
    js: "Javascript",
    rb: "ruby",
    swift: "swift"
}

for (const key in obj) {
    // console.log(`${key}: ${obj[key]}`);   
}

const programmning = ["js", "rb", "cpp", "java"];

for(const key in programmning){
    // console.log(`${key} : ${programmning[key]}`);
}



/********For Each*************/


const coding  = ["js", "cpp", "python", "java"]

coding.forEach(function(item){
    // console.log(item);
});

coding.forEach( (val) => {
    // console.log(val);
})

/***************************/

function lang(item){
    // console.log(item);
}
coding.forEach(lang);

/************* */

coding.forEach((items, index, arr)=>{
    // console.log(items, index, arr);

})

/*[{},{},{}]*/

const myCoding = [
    {
        lang:"java",
        langFileName:"java"
    },
    {
        lang:"python",
        langFileName:"py"
    },
    {
        lang:"Javascript",
        langFileName:"js"
    }
]

myCoding.forEach((items,index)=>{
    console.log(items.lang,":", items.langFileName, index);

})
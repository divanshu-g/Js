/****Use of Map func******/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((nums)=>{
    return nums + 10;
})

// const newNum = numbers.forEach((nums)=> {console.log (nums+10)});
// console.log(newNumbers);
// console.log(newNum);

/*************chaining*************************/

const ChainNums = numbers.map((nums) => nums * 10).map((nums) => nums + 1);
console.log(ChainNums);
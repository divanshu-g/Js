const nums = [1,2,3];
// const totalnums = nums.reduce(function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

const totalnums = nums.reduce((acc, currVal) => {
    // console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 1)
// console.log(totalnums);

/********************** */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalCart = shoppingCart.reduce((acc,item)=>{
    console.log(`acc: ${acc} and price: ${item.price}`);
    
    return acc + item.price;
}, 0);
console.log(TotalCart);
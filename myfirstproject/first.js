

//callback & callback hell
//solution - promises- async - await
//array functions

const arr = [11,20,33,40]
//push-pop
//unshift & shift
//slice - slice(2)
//splice - add remove positionwise
//arr.splice(2,2,22,33)
let a = arr.forEach((i,index)=>{
    console.log("foreach calling..");
    console.log(i);
    return i;
})
let b = arr.map((i,index)=>{
    console.log("map calling..");
    console.log(i);
    return i*2;
})
console.log(a);
console.log(b);
//filter
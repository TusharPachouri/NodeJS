console.warn("Error") // warning
console.log("Error")

const app = require("./App.js") // this is how we can use variables or functions from another directory.

console.log(app.x,app.z())

////////////////////////////////////////////////////////////////////////


const arr = [1,2,3,4,5,6,7,8,9];

console.log(arr)

arr.filter((item)=>{
     console.log(item); // it will return all the items that are store in the array arr.
})

let result = arr.filter((item)=>{
    return item > 5; // it will return the values which are greater than 5.
})
console.log(result);


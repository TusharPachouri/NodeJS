let a = 69;
let b = 0;

setTimeout(()=>{
   b = 69;
},2000)

let waitingData = new Promise ((resolve, rej)=>{
    setTimeout(()=>{
        b= 69;
        resolve(b);
     },2000)

})
waitingData.then((Data)=>{
    console.log(a+b)
})

console.log(a+b);
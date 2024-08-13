const firstPromise = new Promise((resolve,reject) => {
    const data  = [{"name"} , {}];
    setTimeout(() =>{
        reject("Error");
    },4000 )
});

console.log("Before promise")

firstPromise
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})

console.log("After Promise")
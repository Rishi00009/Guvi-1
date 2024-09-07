document.addEventListener('DOMContentLoader' , () => {
    
})
function api(){
fetch("https://official-joke-api.appspot.com/random_joke")
.then((response)=>{ return response.json()})
.then((mes)=> {return mes})
.catch((err)=>  console.log("Error occured" , err))
}
console.log(api())


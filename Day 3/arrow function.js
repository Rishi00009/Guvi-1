// a. Print odd numbers in an arrey

let input = (arrey) => {
    let l = arrey.length
    let arr = []
    for (let  i = 0 ; i < l ; i++  ){
        if(arrey[i]%2!=0){
            arr.push(arrey[i])
        }
    }
    console.log(arr)
    
}

let oddNumbers = input([1,2,3,4,5])

// b . convert all the strings to title caps in a string arrey

let input = (arr) => {
    let l = arr.length
    let ans = []
    for(let j = 0 ; j < l ; j++){
        let str = arr[j]
        str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            } 
            ans.push(str)
    }
                    console.log(ans.join(" ").split(" "));

}

let output = input(["rishi" , "kowsi"])

// c . Sum of all numbers in an arrey

let input = (arr) => {
    let l = arr.length
    let ans = 0
    for(let j = 0 ; j < l ; j++){
        ans = ans + arr[j]   
    }            
    console.log(ans)
}

let nums = input([1,2,3,4,5])

// d . Return all the prime numbers in an arrey

let input = (arr) => {
    let l = arr.length
    let ans = []
    for(let j = 0 ; j < l ; j++){
        if(Number(arr[i])%2!=0 && Number(arr[i])%3!=0 ){
            ans
        }   
    }            
    console.log(ans)
}

let nums = input([1,2,3,4,5])

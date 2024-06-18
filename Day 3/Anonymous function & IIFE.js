// a. Print odd numbers in an arrey ( anonymous function )
var output = function(input) {
        arr  =  input
        var l = arr.length
        var arr2 = []
        for(var i = 0 ; i< l ; i++){
            if(Number(arr[i])%2!=0){
                arr2.push(arr[i])
            }
        }
        
        console.log(arr2)
}
output([1, 2, 3, 4, 5])

// a. Print add numbers in an arrey ( IIFE )

(function(input) {
    arr  =  input
    var l = arr.length
    var arr2 = []
    for(var i = 0 ; i< l ; i++){
        if(Number(arr[i])%2!=0){
            arr2.push(arr[i])
        }
    }
    
    console.log(arr2)
})([1 , 2 , 4 , 6 , 7]);

// c. Sum of all numbers in an arrey  ( anonymous function )

var input = function(arr) {
        var a = arr
        var l = arr.length
        var output = 0
        for(var i = 0 ; i < l ; i++){
            output = output + Number(arr[i])
        }
        console.log(output)
}

input([5 , 10 , 15 , 20])

// c. sum of all numbers in an arrey ( IIFE )

(function(input){
    var arr = input
    var l = arr.length
    var output = 0
    for(var i = 0 ; i < l ; i++){
        output = output + Number(arr[i])
    }
    console.log(output)
})([10 , 20 , 2 , 25])

// d. return all the prime numbers in arrey ( anonymous function )

var primenumbers = function(numbers){
    var arr = numbers
    var l = arr.length
    var arr2 = []
    for(var i = 0 ; i < l ; i++){
        if(Number(numbers[i])%2!=0 && Number(numbers[i])%3!=0){
            arr2.push(numbers[i])
        }
    }
    var output = arr2.join(" ")
    console.log(output)
}

primenumbers([5 , 7 , 9 , 12 , 13])

// d . return all the prime numbers in arrey ( IIFE )

(function(numbers){
    var arr = numbers
    var l = arr.length
    var arr2 = []
    for(var i = 0 ; i < l ; i++){
        if(Number(numbers[i])%2!=0 && Number(numbers[i])%3!=0){
            arr2.push(numbers[i])
        }
    }
    var output = arr2.join(" ")
    console.log(output)

})([ 5 , 7 , 12 , 13])

// e. return all the palindromes in an arrey ( anonymous function )


var input = function(a){
    for(var i = 0 ; i < a.length ; i++){
        var b = a[i].split("").reverse().join("")
        if(a[i]==b){
            console.log(a[i] + " is palindrome")
        }
        else{
            console.log(a[i] + " is not palindrome")
        }
    }
}

input(["MalayalaM" , "Rishi"])

// e. return all the palindromes in an arrey ( IIFE )

(function(a){
    for(var i = 0 ; i < a.length ; i++){
        var b = a[i].split("").reverse().join("")
        if(a[i]==b){
            console.log(a[i] + " is palindrome")
        }
        else{
            console.log(a[i] + " is not palindrome")
        }
    }
})(["malayalam" , "english"])

// f . Return median of two sorted arreys of the same size ( anonymous funcion )

var input = function(a){
    var arr1 = a[0]
    var arr2 = a[1]
    var arr  = [] 
    for(var i = 0 ; i < arr1.length ; i++){
        arr.push(arr1[i])
        arr.push(arr2[i])
    }
    arr.sort(function(i,j) {return(i-j)})
    var l = arr.length
    if(l%2!=0){
        console.log(Number(arr[(l-1)/2]))
    }
    else(
        console.log((Number(arr[l/2]) + Number(arr[(l/2)-1]))/2)
    )
}

input(  [[ 5 , 4 , 3 , 7], [6 , 8 , 3 , 9]])


// f . Return median of two sorted arreys of the same size ( IIFE )

(function(a){
    var arr1 = a[0]
    var arr2 = a[1]
    var arr  = [] 
    for(var i = 0 ; i < arr1.length ; i++){
        arr.push(arr1[i])
        arr.push(arr2[i])
    }
    arr.sort(function(i,j) {return(i-j)})
    var l = arr.length
    if(l%2!=0){
        console.log(Number(arr[(l-1)/2]))
    }
    else(
        console.log((Number(arr[l/2]) + Number(arr[(l/2)-1]))/2)
    )
})(  [[ 6 , 4 , 2 , 10], [0 , 8 , 14 , 12]])


// g . remove duplicates from an arrey ( anonymous function )

var input = function(arr){
    let l = arr.length
    let arr1 = []
    for(let i = 0 ; i< l ; i++){
        if(arr1.indexOf(arr[i])===-1  )
            arr1.push(arr[i])
    }
    console.log(arr1)
}

input([1 , 2 , 1 , 5 , 4 , 2])


// g . remove duplicates from an arrey ( IIFE )

(function(arr){
    let l = arr.length
    let arr1 = []
    for(let i = 0 ; i< l ; i++){
        if(arr1.indexOf(arr[i])===-1  )
            arr1.push(arr[i])
    }
    console.log(arr1)
})([1 , 2 , 1 , 5 , 4 , 2])


// h . Rotate an arrey by k times ( anonymous function )

let rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums)
  }
rotateArray1([1,2,3,4,5] , 2)


// h . Rotate an arrey by k times ( IIFE )


(function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums)
  })([1,2,3,4,5] , 2)
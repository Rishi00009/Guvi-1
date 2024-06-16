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


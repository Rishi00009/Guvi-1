let resume = {

    Name : "Rishi M",
    DOB : "11.07.1999",
    FathersName : "Murugan",
    Gender : "Male",
    MaritalStatus : "Married",
    Nationality : "Indian",
    Religion : "Hindu",
    LanguagesKnows : ["Tamil","English"],
    PhoneNumber : "7871XXXXXX"


}


// for of loop

for (let [key, value] of Object.entries(resume)) {
    console.log(key + " : " + value)
}


// for in loop

for ( let i in resume){
    console.log(i + " : " + resume[i])
}



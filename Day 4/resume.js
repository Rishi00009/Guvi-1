let resume = {

    "Name" : "Rishi M",
    "DOB" : "11.07.1999",
    "FathersName" : "Murugan",
    "Gender" : "Male",
    "MaritalStatus" : "Married",
    "Nationality" : "Indian",
    "Religion" : "Hindu",
    "LanguagesKnows" : ["Tamil","English"],
    "PhoneNumber" : "7871XXXXXX",
    "email" : "rishi@gmail.com",
    "address" : [{
        "doorNumber" : "xx",
        "street" : "selvanagar",
        "city" : "Karur",
        "pincode" : "639006",
        "state" : "Tamilnadu"
    }],
    "education" : [
        {
        "degree": "Master of Science",
        "major" : "Mathematics",
        "otherSubjects" : ["Statics" , "Algebra"],
        "university" : "periyar university",
        "graduationYear" : 2021
        },
        {
            "degree": "Bachelor of Science",
            "major" : "Mathematics",
            "otherSubjects" : ["Tamil" , "English" , "Computer Science" ],
            "university" : "periyar university",
            "graduationYear" : 2019
            },
        
    ],
    "experience" : "Fresher"


}

// //using for loop for iterate over education

for(let i = 0 ; i< resume.education.length ; i++){
    console.log(resume.education[i].degree);
}

// // using for..of loop to iterate over address object

for (let deg of resume.education) {
    for(let degr of deg.otherSubjects)
    console.log(degr)
}


// // using for..in loop to iterate over address object

for ( let key in resume.address){
    console.log(`${key} : ${resume.address[key]}`)
}

//using foreach mathod to iterate over address

resume.address.forEach(add => {
    console.log(`${add.pincode} is a pincode of  ${add.city}`)
});

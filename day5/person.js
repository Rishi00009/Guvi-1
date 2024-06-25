class person {
    constructor(name,age,dob,gender,eduQual,phnNum){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.eduQual = eduQual;
        this.phnNum = phnNum;
    }

getName(){
    return this.name;
}

getAge(){
    return this.age;
}

getEduQual(){
    return this.eduQual;
}

}

const person1 = new person(
    "Rishi",
    25,
    "01.01.2000",
    "Male",
    "M.sc",
    "7871x xxxxx"
)

const person2 = new person(
    "Kavin",
    30,
    "15.08.1999",
    "Male",
    "B.E",
    "9095x xxxxx"
)

console.log(person1.getName())
console.log(person1.getEduQual())

console.log(person2.getAge())
console.log(person2.getName())
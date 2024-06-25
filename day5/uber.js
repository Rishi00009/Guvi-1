class uber{
    constructor(kmRun,pricePerKm){
        this.kmRun = kmRun;
        this.pricePerKm = pricePerKm;
    }


getPrice() {
    return this.kmRun * this.pricePerKm;
}
    
}

const customer1 = new uber (
    10,
    15
);

const customer2 = new uber (
    5,
    15
);


console.log(customer1.getPrice())
console.log(customer2.getPrice())
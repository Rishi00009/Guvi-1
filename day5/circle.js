class circle {
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    getArea(){
        return (Math.PI * this.radius * this.radius).toFixed(2)
    }
    getCircumference(){
        return (2 * Math.PI * this.radius).toFixed(2)
    }

}

const circle1 = new circle(
    10.5,
    "blue"
)

const circle2 = new circle(
    6,
    "green"
)


console.log(circle1.getRadius())
console.log(circle1.getColor())
console.log(circle1.getArea())
console.log(circle1.getCircumference())

console.log(circle2.getRadius())
console.log(circle2.getColor())
console.log(circle2.getArea())
console.log(circle2.getCircumference())
//Class
class Car {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price
    }

    displayinfo = () => {
        console.log(`Car: ${this.make} ${this.make} ${this.price}`);
    }
}

const myCar = new Car("Toyato", "Corolla", 10000)
myCar.displayinfo()


//Object
const person = {
    name: "John",
    age: 30,
    greet: function () {
        // console.log(`Hello, My Name Is ${this.name} and I am ${this.age} Years Old`);
        console.log(this);
    }
}
person.greet();


//Encapsulation
class Counter {
    constructor() {
        let count = 0; //Private Number

        this.increment = () => {
            count++;
            console.log(count);
        };

        this.decrement = () => {
            count--;
            console.log(count);
        };
    }
}

const counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.decrement();


//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak = () => {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    speak = () => {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy")
dog.speak();

//Polymorphisms
//Banks
class Bank{
    rateOfInterest(){};
}
//PNB (Punjab National Bank)
class PNB extends Bank{
    rateOfInterest(){
        return 0.04; //ROI of PNB
    }
}

//SBI
class SBI extends Bank{
    rateOfInterest(){
        return 0.05; //ROI of SBI
    }
}

//HDFC
class HDFC extends Bank{
    rateOfInterest(){
        return 0.06; //ROI of HDFC
    }
}

//Function that accepts any bank calculate interest
function calculateInterest(bank){
    const interestRate = bank.rateOfInterest();
    console.log(`Interest Rate of ${bank.constructor.name}:${interestRate*100}%`);
}
//Creating intances of different bank
const pnbBank = new PNB();
const sbiBank = new SBI();
const hdfcBank = new HDFC();

calculateInterest(pnbBank);
calculateInterest(sbiBank);
calculateInterest(hdfcBank);


//Abstraction
//Abstraction class representing a Shape
class Shape{
    calculateArea(){
        //Default implementation returns 0
        return 0;
    }
}

//concrete subclass representing a Rectangle
class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height
    }
    calculateArea(){
        return this.width*this.height;
    }
}

//concrete subclass representing a circle
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI*this.radius**2;
    }
}

const rectangle = new Rectangle(5,3);
const circle = new Circle(4);

console.log("Area of rectangle:",rectangle.calculateArea());;
console.log("Area of circle:",circle.calculateArea().toFixed(2));;
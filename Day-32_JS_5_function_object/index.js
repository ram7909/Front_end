const person = {
    name: 'Ramcharan Patidar',
    phone: 9171961582,
    salary: 'infintie',
    location: 'Apne ghr pe',
    age: 19,
    pan: 'HUXPP2233L'
}
const person2 = { 
    ...person,
    name: 'Harsh',
    phone: 7047916634,
    aadhar: 567834657987
}
console.log('This is object of Person', person);
const {name,age,phone} = person2 //object destructring
console.log('This is object of Person' , name ,age,phone);
// const number1 =[10,20,30,40,50];
// const number2 = [...number1,60,70,80,90,100];
// console.log(number2)
// const car ={
//     headlight: 2,
//     wheels: 4,
//     engineType: 'petrol'
// }
// const audi ={
//     brandName: 'Audi E220d',
//     available: 'vijay nagar, Indore',
//     price: 4500000,
//     ...car
// }
// const rangerover ={
//     brandName: 'Defender 4x4',
//     available: 'Super Coridor, Indore',
//     price: 4000000,
//     ...car,
//     color: 'red'
// }
// console.log(audi,rangerover)
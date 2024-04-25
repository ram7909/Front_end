// function print(){
//     console.log("This is Normal Function")
// }
// print()

// const print = () => console.log('This is Arrow Function')
// print()
// const sum = (a,b) => {
//     console.log(`sum of ${a} and ${b} = ${a+b}`); 
//     return a + b;
// }
// console.log(sum(10,20))

// const sub = (a,b) => {
//     console.log(`sub of ${a} and ${b} = ${a-b}`);
//     return a + b;
// }
// console.log(sub(100,20))

// const mul = (a,b) => {
//     console.log(`mul of ${a} and ${b} = ${a*b}`);
//     return a * b;
// }
// console.log(mul(10,10))

// const div = (a,b) => a / b
// console.log(div(200,50))

// let a =10, b = 20
// const test = () =>{
//     // let a=2
//     // let b=3
//     console.log(a,b)
// }
// test()

// let a = 10, b=20
// console.log(a,b)
// const test = () => {
//     a = 30
//     b = 40
// }
// test(a,b)
// console.log(a,b)
const calculateArea = (r,h) =>{
     let result = 2*3.14*r*(r+h)
    console.log(result)
}
calculateArea(parseFloat(prompt('Enter Radius')),parseFloat(prompt('Enter height')))

const ci = (p,r,t,n) =>{
    let resul =  p*Math.pow((1+r/n),n*t)-p
    console.log(resul)
}
ci(parseFloat(prompt('Enter Principle')),parseFloat(prompt('Enter Rate')),parseFloat(prompt('Enter Time')),parseFloat(prompt('Enter Num')))

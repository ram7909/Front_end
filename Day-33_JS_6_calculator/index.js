// let a=10,b=20;
// console.log(`sum of ${a} and ${b} = ${a+b}`)
// a=300
// b=400
// console.log(`sum of ${a} and ${b} = ${a+b}`)
// a=10
// b=1000
// console.log(`sum of ${a} and ${b} = ${a+b}`)
// a=90
// b=540
// console.log(`sum of ${a} and ${b} = ${a+b}`)
// a=680
// b=10
// console.log(`sum of ${a} and ${b} = ${a+b}`)
// function sum(a,b){
//     console.log(`sum of ${a} and ${b} = ${a+b}`)
// }
// function subtract(a,b){
//     console.log(`substract of ${a} and ${b} = ${a-b}`)
// }
// function product(a,b){
//     console.log(`multiply of ${a} and ${b} = ${a*b}`)
// }
// function divide(a,b){
//     console.log(`division of ${a} and ${b} = ${a/b}`)
// }
// sum(10,30)
// subtract(50,30)
// product(10,30)
// divide(10,5)
let choice = parseInt(prompt(' Press 1 for Addition \n Press 2 For Substraction \n Press 3 For Multiplication \n Press 4 For Division \n'))
let a=parseInt(prompt('First Number'))
let b=parseInt(prompt('Second Number'))
switch (choice) {
    case 1:
        function sum(a, b) {
            console.log(`sum of ${a} and ${b} = ${a + b}`)
            alert(`sum of ${a} and ${b} = ${a + b}`)
        }
        sum(a,b)
        break;
    case 2:
        function subtract(a, b) {
            console.log(`substract of ${a} and ${b} = ${a - b}`)
            alert(`substract of ${a} and ${b} = ${a - b}`)
        }
        subtract(a,b)
        break;
    case 3:
        function product(a, b) {
            console.log(`multiply of ${a} and ${b} = ${a * b}`)
            alert(`multiply of ${a} and ${b} = ${a * b}`)
        }
        product(a,b)
        break;
    case 4:
        function divide(a, b) {
            console.log(`division of ${a} and ${b} = ${a / b}`)
            alert(`division of ${a} and ${b} = ${a / b}`)
        }
        divide(a,b)
        break;
    default: console.log('Wrong Input')
}
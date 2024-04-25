//function with argument and with return type
function sum(a, b) {
    // console.log(`sum of ${a} and ${b} = ${a+b}`)
    return a + b;
}

//function with argument and without return type
function sub(a, b) {
    console.log(`subtraction of ${a} and ${b} = ${a - b}`)
}

//function without argument and with return type
function div() {
    let a = 300;
    let b = 50;
    console.log(`division of ${a} and ${b} = ${a / b}`)
    return a / b;
}

//function without argument and without return type
function test() {
    let a = 300;
    let b = 10;
    console.log(`division of ${a} and ${b} = ${a / b}`)
}

// console.log(sum(10,20))
const result = sum(10, 20)
console.log(result)
sub(50, 30)
const output = div()
console.log(output)
test()

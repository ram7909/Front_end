const area = (r,h)=>{
    let result = (2*3.14*r*r)+(2*3.14*r*h)
    // console.log(result)
    alert(`Surface Area of Cylinder =  ${result}`)
}
let radius = parseFloat(prompt("Enter Radius"))
let height = parseFloat(prompt("Enter Height"))
area(radius,height)
// area(parseFloat(prompt("Enter Radius")),parseFloat(prompt("Enter Height")))
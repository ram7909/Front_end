let choice = parseInt(prompt('press 1 for currency convertor\npress 2 for calculator\npress 3 for age calculator\npress 4 for area calculator\npress 5 for interest calculator'))
const currency = () =>{
    let currency = parseInt(prompt('press 1 for INR to Dollar\npress 2 for INR to Japanese Yen\npress 3 for INR to Dinar\npress 4 for INR to Dirham\npress 5 for INR to Euro'))
        let dollar=0.012,yen=1.90,dinar=0.0037,dirham=0.044,euro=0.011
        switch(currency){
            case 1: 
            let userInr = parseInt(prompt('Enter INR to Convert In Dollar'))
            let result = userInr*dollar;
            console.log(result);
            break;
            case 2: 
            let userInr1 = parseInt(prompt('Enter INR to Convert In Japanese Yen'))
            let result1 = userInr1*yen;
            console.log(result1);
            break;
            case 3: 
            let userInr2 = parseInt(prompt('Enter INR to Convert In Dinar'))
            let result2 = userInr2*dinar;
            console.log(result2);
            break;
            case 4: 
            let userInr3 = parseInt(prompt('Enter INR to Convert In Dirham'))
            let result3 = userInr3*dirham;
            console.log(result3);
            break;
            case 5: 
            let userInr4 = parseInt(prompt('Enter INR to Convert In Euro'))
            let result4 = userInr4*euro;
            console.log(result4);
            break;
        }
}
const calculator = () =>{
    let calc = parseInt(prompt('press 1 for addition\npress 2 for substraction\npress 3 for modulus\npress 4 for multiplication'))
        let a,b,result;
        switch(calc){
            case 1:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result = a+b;
                console.log(`Sum of ${a} and ${b} = ${result}`)
                break;
            case 2:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result = a-b;
                console.log(`Subtraction of ${a} and ${b} = ${result}`)
                break;
            case 3:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result = a%b;
                console.log(`Modulus of ${a} and ${b} = ${result}`)
                break;
            case 4:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result = a*b;
                console.log(`Multiplication of ${a} and ${b} = ${result}`)
                break;
                
                default:
                     console.log("Wrong Input")
        } 
}
const age= () =>{
    var dob = new Date("07/09/2005");   
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();   
    var age = Math.abs(year - 1970);  
    console.log("Age of the date entered: " + age + " years");  
}
const area =()=>{
    let area = parseInt(prompt('press 1 for surface area of cylinder\npress 2 for area of rectangle'))
        switch(area){
            case 1:
                let r = parseInt(prompt('Enter Radius'))
                let h = parseInt(prompt('Enter Height'))
                let areaCy = (2*3.14*r*r)+(2*3.14*r*h)
                console.log(`Surface area of cylinder radius ${r} and height ${h} is ${areaCy}`)
                break;
            case 2:
                let l = parseInt(prompt('Enter Length'))
                let b = parseInt(prompt('Enter Breadth'))
                let arearec = l*b
                console.log(`Area of Rectangle length ${l} and breadth ${b} is ${arearec}`)
                break;
            default:
                console.log("Wrong Input")
        }
}
const interest=()=>{
    let interest= parseInt(prompt('press 1 for Simple Interest\npress 2 for compound Interest'))
        
        switch(interest){
            case 1:
                let p = parseInt(prompt('Enter principle Amount'))
                let r = parseInt(prompt('Enter Rate'))
                let t = parseInt(prompt('Enter Time (In Years)'))
                let si = (p*r*t)/100;
                console.log(`Simple Interest For Principle ${p} , rate ${r} and time ${t} is ${si}`)
                break;
            case 2:
                let pr = parseInt(prompt('Enter principle Amount'))
                let ra = parseInt(prompt('Enter Rate'))
                let ti = parseInt(prompt('Enter Time (In Years)'))
                let ci = pr*Math.pow((1+ra/100),ti)-pr
                console.log(`Simple Interest For Principle ${pr} , rate ${ra} and time ${ti} is ${ci}`)
                break;
            default:
                console.log('Wrong Input')
        }
}
switch (choice) {
    case 1:
        currency();
        break;
    case 2:
        calculator();
        break;
    case 3:
        age();
        break;
    case 4:
        area();
        break;
    case 5:
        interest();
        break;
        default:console.log('wrong input')
 }
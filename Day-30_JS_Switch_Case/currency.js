const pound = 103.8 ;
const dollar = 83.47;
const yen = 0.54 ;
const euro = 88.89 ;
const dinar = 270.89 ;


let userINR = parseInt(prompt("Enter INR")) ;
let convert = parseInt(prompt("INR to Pound Enter 1 \n INR to Dollar Enter 2 \n INR to Japanese Yen Enter 3 \n Euro to INR Enter 4 \n Dinar to INR Enter 5 \n")); 
let result;


switch(convert){
    case 1: result = userINR/pound;
    console.log(`${userINR} INR in Pound = ${result}`);
    break;
    case 2: result = userINR/dollar;
    console.log(`${userINR} INR in Dollar = ${result}`);
    break;
    case 3: result = userINR/ yen;
    console.log(`${userINR} INR in Japanese Yen = ${result}`);
    break;
    case 4: result = userINR*euro;
    console.log(`${userINR} INR in Euro = ${result}`);
    break;
    case 5: result = userINR*dinar;
    console.log(`${userINR} INR in Dinar = ${result}`);
    break;
    default:
        console.log("Invalid Input")
}
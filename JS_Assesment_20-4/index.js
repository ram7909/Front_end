let convert = parseInt(prompt(" Enter 1 to convert Killometer to Meter \n Enter 2 to convert Kilogram to Gram \n Enter 3 to convert Degree to Fahernhite \n Enter 4 to convert Dollar to Dinar \n Enter 5 to convert Yen to INR \n Enter 6 to convert Pound to Euro \n"));
 const meter = 1000;
 const gram = 1000;
 const dinar = 0.31;
 const inr = 0.54;
 const euro = 1.16;
 let result;
switch(convert){
    case 1:
        let km  = parseInt(prompt("Enter Killometer to convert in Meter"));
        result = km*meter;
        console.log(`${km} Kilometer in Meter is ${result} Meter`);
        break;
    case 2:
        let kg  = parseInt(prompt("Enter Killogram to convert in Gram"));
        result = kg*gram;
        console.log(`${kg} Killogram in Gram is ${result} Gram`);
        break;
    case 3:
        let degree  = parseInt(prompt("Enter Degree to convert in Fahrenite"));
        result = (degree * 9/5)+32;
        console.log(`${degree} Degree in Fahrenite is ${result} Fahrenite`);
        break;
    case 4:
        let dollar  = parseInt(prompt("Enter Dollar to convert in Dinar"));
        result = dollar*dinar;
        console.log(`${dollar} Dollar in Dinar is ${result} Dinar`);
        break;
    case 5:
        let yen  = parseInt(prompt("Enter Japanese Yen to convert in INR"));
        result = yen*inr;
        console.log(`${yen} Japnese Yen in Indian Rupee is ${result} Inr`);
        break;
    case 6:
        let pound  = parseInt(prompt("Enter Pound to convert in Euro"));
        result = pound*euro;
        console.log(`${pound} Pound in Euro is ${result} Euro`);
        break;
        default: console.log("Wrong Input");
 }
// const day = 2;
// switch(day){
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     case 3: console.log("Wednesday");
//     break;
//     case 4: console.log("Thursday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
//     case 7: console.log("Sunday");
//     break;
//     default : console.log("Wrong Input");
// }

const input = 1;
switch(input){
    case 1: const Japanese = 0.54;
            let Inr = 10;
            let result = Japanese*Inr ;
            console.log(`Japnese to Indian Rupees = "${result}"`);

    case 2: const Pounds = 103.80;
            let inr = 30;
            let out = Pounds*inr;
            console.log(`Pound to Indian Rupees = "${out}"`);

    case 3: const Dollar = 83.47;
            let rupes = 15;
            let ans = rupes*Dollar ;
            console.log(`Dollar to Indian Rupees = "${ans}"`);

    case 4: const Euro = 88.89;
            let INR = 10;
            let R = INR/Euro;
            console.log(`Indian Rupees to Euro  = "${R}"`);

    case 5: const Dinar = 270.79;
            let INr = 10;
            let rs = INr/Dinar;
            console.log(`Dinar to Indian Rupees = "${rs}"`);

     default : console.log("Wrong Input");
}
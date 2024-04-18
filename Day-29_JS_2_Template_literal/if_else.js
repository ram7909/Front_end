// && => and , || => or

// const aadharCard = true;
// const panCard = true;
// const age = 2;

//Nested if...
// if(panCard && aadharCard){
//     console.log("You Can Open Account In Our Bank");
//     if(age>=18){
//         console.log("You are Eligible for car insurance");
//     }
//     else{
//         console.log("Your Age Should be greater then 18 to claim inssurance");
//     }
// }
// else{
//     console.log("You Can not Open Account In Our Bank");
// }


// Nested if else

// const p = 70;
// const c = 70;
// const m = 90;
// const e = 90;
// const cs = 80;
// const total = p+c+m+e+cs;
// const avg = (total / 500)*100;
// const lvl1 = true;
// const lvl2 = true;
// const lvl3 = true;
// const amount = 10000;

// if(avg>=80){
//     console.log("You are Eligible for olampic");
//     if(lvl1 && lvl2 && lvl3){
//         console.log(`You Win Olampic and You Reward Is "${amount}"`)
//     }
//     else{
//         console.log("You Loss the Olampic");
//     }
// }
// else{
//     console.log("You are not Eligible for olampic")
// }


// Else-if Ladder
const day = 1;
if(day == 1){
    console.log("Gym")
}
    else if(day == 2){
        console.log("Running")
    }
    else if(day == 3){
        console.log("Wake Up Early Morning")
    }
    else if(day == 4){
        console.log("Study")
    }
    else if(day == 5){
        console.log("Rest")
    }
    else if(day == 6){
        console.log("Travel")
    }
    else if(day == 7){
        console.log("Explore")
    }
else{
    console.log("Not go Anywhere")
}
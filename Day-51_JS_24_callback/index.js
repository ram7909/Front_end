// console.log("Callback Function");

// const print = (content,callback)=>{
//     console.log(content);
//     const result = callback()
//     console.log(result);
// }
// const sbiROI =()=>7.9

// // const print2= ()=>console.log("Spiderman is belong from Marvel");
// print("Superman is belong from DC",sbiROI)

// const marksClc = (callback) =>{
//     const result = callback();
//     console.log(result);

//     let totalMarks = 0;
//     let count =0;
//     for (let key in result) {
//         totalMarks += result[key]
//         count++; 
//     }
//     return totalMarks/count;
// }

// const subjects = ()=>{
//     const arr={
//         cpp:50,
//         java:60,
//         php:70,
//         javascript:95,
//         react:100,
// }
//     return arr;
// }

// console.log(marksClc(subjects)); 


const mysal = (inhand,callback)=>{
    const result = callback()
    console.log(result);
    let totalpercentage = 0;
    for (let key in result) {
        totalpercentage += result[key]
    }
    deducSal = (inhand*totalpercentage)/100;
    remainSal = inhand - deducSal;
    console.log("Remaining Salary",remainSal);
}
const deduction = ()=>{
    const tax={
        gst:5.5,
        itr:2.3,
        homeLoan:8.9,
        eduLoan:9.2,
        iphoneLoan:10.2
    }
    return tax;
}

mysal('100000',deduction)
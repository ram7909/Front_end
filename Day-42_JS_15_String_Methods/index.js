//charAt to find a character in particular place or index
// const str = "superman"

// //to find length of string
// console.log(str.length);

// console.log(str.charAt(0));
// for(let i=0;i<str.length;i++){
//     console.log(str.charAt(i));
// }

//Education
// const vowels = (str)=>{
//     let vowelcount = 0;
//     let consonentCount = 0;
//     let vowels = [];
//     let consonent  = [];

//     let str2 = str.toLowerCase();
//     for(let i=0;i<str2.length;i++){
//         let char = str2.charAt(i);
//         if(char =='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//             vowelcount++;
//             vowels.push(str.charAt(i))
//         }
//         else{
//             consonentCount++;
//             consonent.push(str.charAt(i));
//         }
//     }
//     console.log("Vowels Count",vowelcount);
//     console.log(vowels);
//     console.log("Consonent Count",consonentCount);
//     console.log(consonent);
// }
// const str = "EduCatIon"
// vowels(str)

//indexof
// const str = "Superman"
// console.log(str.indexOf('n'));

//replace
// let str = "hello"
// console.log(str);
// console.log(str.replace("e","E"));

//split
// let str = "The Superman is belong from DC"
// console.log(str.split(' '));

//slice
let str = "Superman Hello"
console.log(str.slice(9,13));
const arr =[10,20,30,40,"superman","spiderman",30.45,false]
//push => insert new element in last or ending of array
// console.log(arr);
// arr.push('batman')
// console.log(arr);

//push => remove or return last element of ending of array
// console.log(arr);
// arr.pop()
// console.log(arr);

//shift => remove or return first element of starting of array
// console.log(arr);
// arr.shift()
// console.log(arr);
// for (let index = 0; index < 4; index++) {
//     arr.shift();
// }
//     while(arr.length !=0){
//         arr.shift();
//     }
//     console.log(arr);
// console.log(arr);

//unshift => add element in  first of starting of array
// console.log(arr);
// arr.unshift(500)
// console.log(arr);

//splice =>replace,remove in the array
// console.log(arr)
// arr.splice(4,2)
// console.log(arr);

//slice => split array
// console.log(arr);
// arrslice = arr.slice(5,8) // from index 1 to 4 not include index 5
// console.log(arrslice);

//concat => merge two array
// arr2 = [6,7,8]
// let conarr = arr.concat(arr2)
// console.log(conarr);

const salary = [
    {emp:1,salary:100,name:'superman'},
    {emp:2,salary:201,name:'superman'},
    {emp:3,salary:305,name:'billgates'},
    {emp:4,salary:250,name:'falana'},
    {emp:5,salary:815,name:'mukesh ambani'},
    {emp:6,salary:600,name:'elon musk'},
    {emp:7,salary:723,name:'ironman'},
    {emp:8,salary:750,name:'thor'},
    {emp:9,salary:90089,name:'captain america'}
]
// let result = salary.slice(3,9)
// console.log(result);
let evensalary =[]
for (const element of salary) {
    if(element.salary >300 && element.salary<750){
        evensalary.push(element)
    }
}
console.log("even salary array",evensalary);


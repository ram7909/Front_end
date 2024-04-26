// For-In Loop
// let marvel ={
//     movieName: 'Infinity War',
//     release: 2017,
//     hero: 'Ironman',
//     location: 'NYC US',
//     rating: '5 Star'
// }
// for(let key in marvel){
//     console.log(`${key} : ${marvel[key]}`)
//     // console.log(`${key}`)
//     // console.log(`${marvel[key]}`)
// }



// For-of Loop
let arr = [10,20,'superman','spiderman']
// let i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++;
// }
for(let element of arr){
    console.log(element)
}





// For-Each Loop
// arr.forEach((value,index)=>console.log(index,value))
arr.forEach((value,index)=>console.log(index,value+20))
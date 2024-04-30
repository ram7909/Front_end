// const arr =[10,20,30,40,"superman","spiderman","facebook","google",10.23,40.23,true,false,'a','z','b']
// console.log(arr)

const movie = [
    {title: 'Ra.one',Actor:'SRK',release:2012,Hit:false,flop:true},
    {title: 'Infinity war',Actor:'RDJ',release:2018,Hit:true,flop:true},
    {title: 'Dhoom 3',Actor:'Amir Khan',release:2013,Hit:true,flop:false},
    {title: 'End game',Actor:'thnos',release:2019,Hit:true,flop:false}
]
// console.log(movie)
// for(let i=0;i<movie.length;i++){
//     console.log(movie[i].title)
// }


// let i=0;
// while(i<movie.length){
//     console.log(movie[i].title)
//     i++;
// }


// for (const key in movie) {
//     console.log(key,movie[key])
// }

// for (const element of movie) {
//     console.log(element)
// }

movie.forEach((value,index) => console.log(value,index))
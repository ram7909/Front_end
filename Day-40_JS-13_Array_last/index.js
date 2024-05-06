const arr = [
    {id:1,name:'superman',email:'superman@gmail.com',salary:600},
    {id:2,name:'ironman',email:'ironman@gmail.com',salary:150},
    {id:3,name:'spiderman',email:'spider@gmail.com',salary:2000},
    {id:4,name:'shaktiman',email:'shakti@gmail.com',salary:6000},
    {id:5,name:'hulk',email:'hulk@gmail.com',salary:500}
]
const result =  arr.map( (data)=>data.salary + 10000)
console.log(result);
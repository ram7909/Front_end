//Promise


const p = new Promise((resolve,reject)=>{
    const num = '10';
    if(num === 10){
        resolve("10 is Number")
    }
    else{
        reject('10 is String')
    }
});

p.then((msg) => console.log(msg)).catch((msg)=>console.log(msg))
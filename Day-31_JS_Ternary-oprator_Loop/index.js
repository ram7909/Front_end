const age =19;
(age>=18)?console.log("You can Vote"):console.log("You can not vote");
let c = 1;
let result;
for(i=0;i<10;i++){
    result = 2*c;
    console.log(`2 * ${c} = ${result}`);
    c++;
}
let n = 496440;
let sum = 0;
while(n!=0){
    let temp = n % 10;
    sum += temp;
    n = Math.floor((n/10));
    console.log("remainder "+n);
}
console.log(`${sum}`);

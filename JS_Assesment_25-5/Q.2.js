const compare = ()=>{
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                console.log(arr1[i]);
            }
        }
    }
}

let arr1 = [9,10,20,21,40,80]
let arr2 = [20,5,9,21]
const result = compare(arr1,arr2)
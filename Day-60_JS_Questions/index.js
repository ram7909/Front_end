// Q-1
const arr = [2,4,4,3,6,1,9,9,2,5,5,3]
const arr1 = []
const duplicateRemove  = (arr) =>{
    arr.forEach(index =>{
        if(!arr1.includes(index)){
            arr1.push(index)
        }
    })
    return arr1;
}
const result = duplicateRemove(arr)
console.log(result);

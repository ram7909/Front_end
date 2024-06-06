const arr = [1,2,8,9,9,9,2,4,5,5,2,3,2,1,2]
const mostFrequentElement = (arr) =>{
    let frequentElement;
    let currentcount = 0;
    for(let i=0;i<arr.length;i++){
        let count =0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count > currentcount){
            currentcount = count;
            frequentElement = arr[i]
        }
    }
    return frequentElement;
}
const result = mostFrequentElement(arr)
console.log(result);
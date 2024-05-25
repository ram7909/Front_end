const sum = (arr,target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] == target) {
            console.log(i, i + 1);
        }
    }
}

let arr = [2, 1, 8, 11]
const target = 9;
let result = sum(arr,target)
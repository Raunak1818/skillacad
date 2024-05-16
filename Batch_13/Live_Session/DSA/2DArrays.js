// 1 2 3
// 4 5 6
// 7 8 9

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr.length);


let r = 3;
let c = 3;
let sum = 0;
for(let i=0 ; i<r ; i++){
    for(let j=0 ; j<c ; j++){
        sum += arr[i][j];
    }
}
console.log(sum);
let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]]
        //147 , 258 , 369
let r = 3;
let c = 3;
for(let i=0 ; i<r ; i++){
    for(let j=0 ; j<c ; j++){
        if(i<j){ 
            console.log("swap");
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
}
console.log(arr);
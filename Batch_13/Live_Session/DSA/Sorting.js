function bubbleSort(arr){
    let n = arr.length
    for(let i=1 ; i<=n-1 ; i++){ //loop for passes
        for(let j=1 ; j<=n-i ; j++){ //comparing adjacent elements in a pass
            if(arr[j-1] < arr[j]){  //swap if previous is greater
                let temp = arr[j-1]; //3 step swapping
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
let arr = [5,1,2,3,2,4,7];
bubbleSort(arr);
console.log(arr);

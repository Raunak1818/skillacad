function selectionSort(arr){
    let n = arr.length;
    for(let i=0 ; i<n-1 ; i++){ //n-1 passes
        let smallest = i; //using to find the smallest element ka index
        for(let j=i+1 ; j<n ; j++){ //find the smallest
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        //swap smallest element with i
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    
}

let arr = [5,1,2,3,4,7];
selectionSort(arr);
console.log(arr);




smallest = 5
a = 4

if ( a < smallest)
    smallest = a

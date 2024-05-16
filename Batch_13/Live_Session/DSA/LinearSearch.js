function linearSearch(arr,target){
    let n = arr.length;
    for(let i=0 ; i<n ; i++){
        if(arr[i]==target)
            return i;
    }
    return -1;
}
let arr = [3,1,4,5,2,6,9,7];
let target = 4;
let ans = linearSearch(arr,target);

if(ans==-1)
    console.log("Element not found");
else
    console.log("Element found at index : "+ans);
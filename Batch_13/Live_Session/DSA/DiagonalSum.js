let arr = [ [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],];
let n = arr.length;
let sum = 0;
//primary diagonal
for(let i=0 ; i<n ; i++){
    sum += arr[i][i];
}

//secondary diagonal
let i = 0;
let j = n-1;
while(i<n && j>=0){
    sum += arr[i][j];
    i++;
    j--;
}
//if n is odd then subtract middle because it is counted twice
if(n%2!=0)
    sum -= arr[(n-1)/2][(n-1)/2];
console.log(sum);

// 1 6 11 16 4 7 10 13
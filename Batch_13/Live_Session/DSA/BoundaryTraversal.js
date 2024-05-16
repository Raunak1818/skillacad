let arr = [ [1, 2, 3,  4],
            [5, 6, 7,  8],
            [9, 10,11,12],
            [13,14,15,16] ];
ans = [];
let n = arr.length;
let m = arr[0].length;
//Boundary Traversal - > 1 2 3 4 8 12 16 15 14 13 9 5 

//first row i=0 , j=0 to m-1
for(let j=0 ; j<=m-1 ; j++)
    ans.push(arr[0][j]);

//last column j=m-1 , i=1 to n-1
for(let i=1 ; i<=n-1 ; i++)
    ans.push(arr[i][m-1])

//last row i=n-1 , j=m-2 to 0
for(let j=m-2 ; j>=0 ; j--)
    ans.push(arr[n-1][j]);

//first column j=0 , i=n-2 to 1
for(let i=n-2 ; i>=1 ; i--)
    ans.push(arr[i][0])

console.log(ans);


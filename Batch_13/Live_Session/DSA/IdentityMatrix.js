let r = 3;
let c = 3;
function checkIdentity(arr){
    for(let i=0 ; i<r ; i++){
        for(let j=0 ; j<c ; j++){
            //if diagonal element is not 1 , return false
            if(i==j && arr[i][j]!=1)
                return false;
            //if non diagonal element is not 0 , return false
            if(i!=j && arr[i][j]!=0)
                return false;
        }
    }
    return true;
}


let arr = [[1,0,0],
           [0,1,0],
           [0,0,1]];
console.log(checkIdentity(arr));

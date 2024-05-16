function palindrome(str){
    let n = str.length;
    let s = 0;
    let e = n-1;

    while( s<e ){
        if(str[s] != str[e])
            return false;
        else{
            s++;
            e--;
        } 
    }
    return true;
}

let str = "hello";
console.log(palindrome(str));



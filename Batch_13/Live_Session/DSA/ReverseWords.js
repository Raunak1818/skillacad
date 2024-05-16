function reverse(s){
    let rev = "";
    let n = s.length;
    for(let i=n-1 ; i>=0 ; i-- ){
        rev = rev + s[i];
    }
    return rev;
}

let s = "I am learning Javascript";
let word = "";
let ans = "";

let n = s.length;
for(let i=0 ; i<n ; i++){
    if(s[i]==" "){
        //reverse the word 
        //add it to ans along with a space
        ans += reverse(word);
        ans += " ";
        word = "";
    }
    else{
        word += s[i];
    }
    
}
ans += reverse(word); //for last word
console.log(ans);
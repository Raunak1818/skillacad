let s = "I am learning javascript";

let spaces = 0;
let n = s.length;

for(let i=0 ; i<n ; i++){
    if(s[i]==" "){
        spaces++;
    }
}
let words = spaces + 1;
console.log(words);
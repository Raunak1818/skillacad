let s = "abcde";

let stack = [];
let reverse = "";

for(let i=0 ; i<s.length ; i++){
    stack.push(s[i]);
}

while( stack.length>0 ){
    reverse = reverse + stack.pop();
}

console.log(reverse);
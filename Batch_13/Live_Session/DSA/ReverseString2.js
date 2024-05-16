let s = "abcde";
let reverse = "";
let n = s.length;

for(let i=n-1 ; i>=0 ; i--){
    reverse = reverse + s[i];
}
console.log(reverse);
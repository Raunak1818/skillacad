function reverse(s){
    let rev = "";
    let n = s.length;
    for(let i=n-1 ; i>=0 ; i-- ){
        rev = rev + s[i];
    }
    return rev;
}

let s = "car";
let rev = reverse(s);

if ( s==rev )
    console.log("Yes");
else
    console.log("No");

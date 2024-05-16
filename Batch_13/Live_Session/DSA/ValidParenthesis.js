function check(s){
    let stack = [];
    for(let i=0 ; i<s.length ; i++){
        if(s[i]=='('){
            stack.push(s[i]);
        }
        else{ // -> )
            if(stack.length > 0) //not empty
                stack.pop();
            else
                return false;
        }
    }
    if(stack.length==0)
        return true;
    else
        return false;
}
let s = ")";
console.log(check(s));
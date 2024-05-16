let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
console.log(stack[stack.length-1]); //peek
stack.pop();
console.log(stack);
stack.push(40);
console.log(stack);
console.log(stack[stack.length-1]); //peek
stack.pop();
console.log(stack);

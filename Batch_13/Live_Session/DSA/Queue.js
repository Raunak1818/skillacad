let q = [];
// push and shift
// 8
q.push(5);
q.push(7);
q.shift();
//front - first element of queue
console.log(q[0]);//front - 7
q.push(9);
console.log(q[0]);//front - 7
q.shift();
q.shift();
console.log(q[0]);//front - empty
q.push(8);
console.log(q[0]);//front - 8

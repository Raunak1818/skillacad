// function funcA(){
//     console.log('Function A is calling');

// }
// function funcB(){
//     console.log('Function B is calling');
// }
// funcA();
// funcB();



// function friendcall1(callingfunction){
//     setTimeout(()=>{
//         console.log('talking to friend 1and will call you after 3sec ');
// callingfunction();
//     },2000);
// }

// function friendcall2() {
//     console.log('see ihave called you');
// }
// friendcall1(friendcall2);




// function friendcall1(){
//     setTimeout(()=>{
//         console.log('talking to friend 1and will call you after 3sec ');
// friendcall2();
//     },2000);
// }

// function friendcall2() {
//     console.log('see ihave called you');
// }
// friendcall1();


// callbac dependency
addition(5,function(addres){
    substraction(addres,function(subres){
        multiplication(subres,function(mulres){
            division(mulres,function(divres){
                console.log(divres);
            })
        })
    })
})
function addition(val,callback){
    return callback(val+5)
}
function substraction(val,callback){
    return callback(val-3)
}
function multiplication(val,callback){
    return callback(val*5)
}
function division(val,callback){
    return callback(val/7)
}
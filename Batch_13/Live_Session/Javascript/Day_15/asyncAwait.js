// sync way
// function show(){
//     let a=8;
//     console.log(a);
// }
// console.log('hello');
// show();
// console.log('hello again');   

// **********Async Way********** 

// function show(){
//         let a=8;
//         console.log(a);
//     }
//     console.log('hello');
//     setTimeout(show,2000);
//     console.log('hello again');  


// another way 

// async function show() {
//     let a = await 8;
//     console.log(a);
// }
// console.log('hello');
// show();
// console.log('hello again');

// async function showresult(){
// let a=await addition(5);
// let b=await substraction(a);
// let c=await multiplication(b);
// let d=await division(c);
// console.log(d);
// }
// showresult();
// function addition(val){
//     return (val+5)
// }
// function substraction(val){
//     return (val-3)
// }
// function multiplication(val){
//     return (val*5)
// }
// function division(val){
//     return (val/7)
// }



async function show (){
        const result=await new Promise((resolve,reject)=>{
            setTimeout(() => {
               const succes=true;
               if(succes){
                resolve();
               } 
               else{
                reject();
               }
            }, 2000);
        })
        console.log(result);
     }
     show();
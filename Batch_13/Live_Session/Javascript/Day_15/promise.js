// var mypromise=new Promise(function(resolve,reject){
//     const number1=2
//     const number2=2
//      if(number1==number2){
//         resolve();
//      }
//      else{
//         reject();


//  }
// })
   
//  mypromise
//  .then(()=>console.log('my matter is resolved'))
//  .catch(()=>console.log('not resoved'))

//  function show (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            const succes=true;
//            if(succes){
//             resolve();
//            } 
//            else{
//             reject();
//            }
//         }, 2000);
//     })
//  }
//  show().then(()=>console.log('true')).catch(()=>console.log())



var promise=new Promise(function(res,rej){
    res(5);
})
promise.then(addition).then(substraction).then(multiplication).then(division)
.then(function(data){
    console.log('result is',data);
})
function addition(val){
    return (val+5)
}
function substraction(val){
    return (val-3)
}
function multiplication(val){
    return (val*5)
}
function division(val){
    return (val/7)
}
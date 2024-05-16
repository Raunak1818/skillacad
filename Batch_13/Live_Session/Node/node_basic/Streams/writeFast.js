const fs= require('fs');


// (async()=>{
//     const writestream=fs.createWriteStream('streams/Data2.csv');
//     for(let i=0;i<1e6;i++){
//         const data=writestream.write(`${i},${i+2}\n`);
//         if(!data){
//             await new Promise((resolve)=>{
//                 writestream.once('drain',resolve)
//             })
            
//         }
//     }
//     writestream.end();
// })()





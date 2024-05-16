const fs=require('fs');


// ------------asyn way-----------------------

// fs.readFile('myfile.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.readFile('myfile.txt',(err,data)=>{
//     console.log(data.toString());
// })
// console.log('finished reading');


// --------------synch way----------------------- 

// const data= fs.readFileSync('myfile.txt')
// console.log(data.toString());
// console.log('reading finished');



// --------------------read multiple files together-----------------

// const files=['myfile1.txt','myfile2.txt'];

// files.forEach((file)=>{
    // const data=fs.readFileSync(file,'utf-8');
    // console.log(`contents to the file ${file}`)
    // console.log(data);
    // console.log('----------');
    
// })

// for(let file of files){
//     const data=fs.readFileSync(file,'utf-8');
   
//     console.log(data);
//     console.log('----------');
    
// }


// ----------------- for all file read ---------------------- 



// function readFileData(...filepaths){
//     console.log(filepaths);
// filepaths.forEach((filepath)=>{
//     try{       
//     const filecontent=fs.readFileSync(filepath,'utf-8');
//     console.log(filecontent);     
//     }

//     catch(e){
//         console.log(e);
//     }

// })
// }

// readFileData('myfile1.txt', 'myfile2.txt', 'myfile3.txt', 'myfile4.txt')




//------------------ for delete ----------------------




function readFileData(...filepaths) {
    console.log(filepaths);
    var ingnore=['myfile4.txt','myfile5.txt']
    filepaths.forEach((filepath) => {
        try {
            // if (filepath!= 'myfile3.txt') {       for 1file ignore
            if(!ingnore.includes(filepath)){
                const filecontent = fs.readFileSync(filepath, 'utf-8');
                console.log(filecontent);
            }
            else{
                console.log('not allowed');
            }
        }
        catch (e) {
            console.log(e);

        }
    })
}
readFileData('myfile1.txt', 'myfile2.txt', 'myfile3.txt', 'myfile4.txt','myfile5.txt')

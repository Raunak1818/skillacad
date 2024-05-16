const http=require('http');
const fs=require('fs');
const path=require('path');


const uploadDir=path.join(__dirname,'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}

const server=http.createServer((req,res)=>{
    if(req.url=== '/' && req.method==='GET'){
        
        //  fs.readFile(path.join(__dirname,'fileExtention.html'),(err,data)=>{
            fs.readFile(path.join(__dirname,'FileExtension.html'),(err,data)=>{

            // fs.readFile(path.join(__dirname,'FileExtension.html'),(err,data)=>{
            
            // if(req.url==='/' && req.method==='GET'){
            //             fs.readFile(path.join(__dirname,'fileExtension.html'),(err,data)=>{


            if (err){
               console.log(data);
               res.end('<h1>Internal server error</h1>')
            }
            else{
                res.end(data)
            }
            // if(req.url==='/' && req.method==='GET'){
                //         fs.readFile(path.join(__dirname,'fileExtension.html'),(err,data)=>{
                            // if(err){
                            //     res.writeHead
                            //     res.end('<h1>Internal Server Error</h1>')
                            // }
                            // else{
                            //     res.end(data)
                            // }
                //         })
                //     }
        })
    }
   
else if(req.url==='/uploads' && req.method==='POST'){
    console.log('inside');
    let body=' ';
    req.on('data',chunk=>{
        body+=chunk;
    })
   
        req.on('end',()=>{
                        console.log('recived data',body.toString());
                        const fileData=body.split('\r\n')[4];
                        // console.log(fileData);
                        const fileName=body.split('\r\n')[1].split('; ')[2].split('=')[1].replace(/"/g,'');
                        console.log(fileName);
                        const allowedExt=/jpeg|jpg|png/;
                        const extname=allowedExt.test(path.extname(fileName).toLowerCase());
                        if(!extname){
                            res.end('Only JPG, JPEG and PNG files are allowed')
                        }
    })

}
})

server.listen(3400,()=>{
    console.log('Serever is listening');
})







// const http=require('http');
// const fs=require('fs');
// const path=require('path');

// const uploadDir=path.join(__dirname,'uploads');
// // const dataFile=path.join(__dirname,'datafile1');
// // console.log(dataFile);
// // console.log(uploadDir);
// if(!fs.existsSync(uploadDir)){
//     fs.mkdirSync(uploadDir)
// }



// const server=http.createServer((req,res)=>{
//     if(req.url==='/' && req.method==='GET'){
//         fs.readFile(path.join(__dirname,'fileExtension.html'),(err,data)=>{
//             if(err){
//                 res.writeHead
//                 res.end('<h1>Internal Server Error</h1>')
//             }
//             else{
//                 res.end(data)
//             }
//         })
//     }
//     else if(req.url==='/uploads' && req.method==='POST'){
//         console.log('inside');
//         let body='';
//         req.on('data',chunk=>{
//             body+=chunk;
//         })

//         req.on('end',()=>{
//             console.log('recived data',body.toString());
//             // const fileData=body.split('\r\n')[4];
//             // // console.log(fileData);
//             // const fileName=body.split('\r\n')[1].split('; ')[2].split('=')[1].replace(/"/g,'');
//             // console.log(fileName);
//             // const allowedExt=/jpeg|jpg|png/;
//             // const extname=allowedExt.test(path.extname(fileName).toLowerCase());
//             // if(!extname){
//             //     res.end('Only JPG, JPEG and PNG files are allowed')
//             // }
//         })
//     }
// })

// server.listen(3400,()=>{
//     console.log('Serever is listening');
// })

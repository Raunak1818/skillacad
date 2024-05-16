const http= require('http');
const fs= require('fs');
const path= require('path');
const url= require('url');


const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);

    if (parsedurl.pathname==='/'){
       fs.readFile(path.join(__dirname,'FormData.html'),(err,data)=>{
        if(err){
            res.writeHead(500,{'content-type':'text/html'});
            res.end('internal error')
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.end(data)
        }
       }) 
    }
    else if(parsedurl.pathname==='/submit'&&req.method==='POST'){
        let body=" ";
        req.on('data',chunk=>{
            body=+chunk.toString();
            console.log(body);
        })

       
    }
})
 server.listen(3400,()=>{
            console.log('listening ');
        })
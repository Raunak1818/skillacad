// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end('<h1>Your google page</h1>')
// })

// server.listen(3200);



const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
res.end('<h1>Your home page</h1>')
    }else
    if(req.url=='/about'){
        
        res.write('<h1>your about page-1</h1>') 
        res.end('<h1>your about page-2</h1>')
    }else
    if(req.url=='/contact'){
        res.end('<h1>your contact page</h1>')
    }else
    res.statusCode=404
   res.end('<h1>error page</h1') 
})

server.listen(3400);
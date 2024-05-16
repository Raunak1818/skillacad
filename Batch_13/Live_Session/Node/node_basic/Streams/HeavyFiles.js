const fs =require('fs');
const http=require('http');
const port=3300;
const server=http.createServer();


server.on('request',(req,res)=>{
    const readstream=fs.createReadStream('customers.csv');
    readstream.on('data',(datachunk)=>{
        res.write(datachunk.toString())
    })
    readstream.on('end',(e)=>{
        console.log('<h1>ERROR</h1>');
    })
})
server.listen(port,()=>{
    console.log('server is listening');
})
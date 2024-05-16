const express=require('express');
const app=express();
const upload=require('express-fileupload');

app.use(upload());

app.get('./',(req,res)=>{
    res.send(__dirname+'/index.html')
})

app.listen(3400,()=>{
    console.log('server is listening');
})
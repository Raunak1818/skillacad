const express=require('express');
const app=express();
// const cors=require('cors');
const port=3300;
const medicineRecord=require('./models/medicine');
require('./db/conn');
// app.use(cors())
app.use(express.json());


app.get('/',(req,res)=>{
res.send('<h1>Welcome to API creation of medicines</h1>')
});

app.get('/medicinedata',async(req,res)=>{
    try{
        const medData=await medicineRecord.find({});
        res.status(201).json(medData);
    }
    catch(e){ 
        console.log(e);
    }

})

app.post('/medicines',async(req,res)=>{
    try{
        const newMedicine=await medicineRecord.create(req.body);
        res.status(201).json(newMedicine);

    }
    catch(e){
        console.log(e);
        res.status(500).json({e:'internal sever error'})
    }
})


app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})
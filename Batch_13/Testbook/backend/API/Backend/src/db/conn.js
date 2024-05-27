const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/welcom_1')
.then(()=>console.log('Database is connected'))
.catch((e)=>console.log(e,'Database is not connected'))
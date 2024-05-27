const mongoose=require('mongoose');;

const medicineSchema=new mongoose.Schema({
    medicine_name:String,
    medicine_salt:String,
    medicine_mfg:String,
    medicine_expiration:String,
    medicine_usage:String,
    medicine_storing_place:String,
    best_time_to_take_medicine:String,
    medicine_dosage:String,
    medicine_side_effects:String,
    medicine_prescription_required:String
})


const medicineRecord= new mongoose.model('medicinerecord',medicineSchema);
module.exports=medicineRecord;
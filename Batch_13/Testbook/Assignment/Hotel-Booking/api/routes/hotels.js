import express from "express";
import {
    // countByCity,
    // countByType,
    createHotel,
    deleteHotel,
    getHotel,
    // getHotelRooms,
    getHotels,
    updateHotel,
  } from "../controllers/hotel.js";
   import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// create
// router.post('/',async(req,res)=>{
//     const newHotel= new Hotel(req.body)
//     try{
// const savedHotel=await newHotel.save()
// res.status(200).json(savedHotel)
//     }
//     catch(error){
//         res.status(500).json(err)
//     }
// })
router.post("/",verifyAdmin,createHotel);

// UPDATE
// router.put('/:id',async(req,res)=>{
   
//     try{
// const updateHotel=await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body},{new:true})
// res.status(200).json(updateHotel)
//     }
//     catch(error){
//         res.status(500).json(err)
//     }
// })
router.put("/:id",verifyAdmin, updateHotel);


// delete
// router.delete('/:id',async(req,res)=>{
   
//     try{
//       await Hotel.findByIdAndDelete(req.params.id,);
//        res.status(200).json('Hotel has been deleted')
//     }
//     catch(error){
//         res.status(500).json(err)
//     }
// })
router.delete("/:id", deleteHotel);


// get
// router.get('/:id',async(req,res)=>{
   
//     try{
//         const hotel=await Hotel.findById(req.params.id);
//          res.status(200).json(hotel)
//     }
//     catch(error){
//         res.status(500).json(err)
//     }
// })
router.get("/find/:id", getHotel);


// Get All 
// router.get('/',async(req,res,next)=>{
   
  
//     try{
//         const hotels=await Hotel.find();
//          res.status(200).json(hotels)
//     }
//     catch(error){
//        next (err)
//     }
// })
router.get("/", getHotels);



export default router
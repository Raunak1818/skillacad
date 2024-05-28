import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/user.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
const app = express();

const connect = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/Hotel_Booking')
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  app.get('/',(req,res)=>{
    res.send('hello ')
  })

  //middlewares

  app.use(express.json())

  app.use("/auth", authRoute);
  app.use("/user", usersRoute);
  app.use("/hotels", hotelsRoute);
  app.use("/rooms", roomsRoute);



  app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

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
  app.use(cookieParser())
  app.use(express.json())

  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/hotels", hotelsRoute);
  app.use("/api/rooms", roomsRoute);

 app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
    });
    
  });



  app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });
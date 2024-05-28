import express from "express";
// import { login, register } from "../controllers/auth.js";
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello,this is auth ')
})

router.get('/register',(req,res)=>{
    res.send('Hello,this is auth register ')
})



// router.post("/register", register)
// router.post("/login", login)
export default router
import express from "express";
import {login,  register } from "../controllers/auth.js";
const router = express.Router();

// router.get('/',(req,res)=>{
//     res.send('Hello,this is auth ')
// })

router.post('/register',register)
router.post('/login',login)
   




// router.post("/register", register)
// router.post("/login", login)
export default router
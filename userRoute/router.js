import express from "express";
import {registerController,adminLoginController,loginController} from "../controller/usercontroller.js";
const router= express.Router();

//register User
router.post('/register', registerController);

//login User
router.post('/login', loginController);
//login admin
router.post('/adminlogin', adminLoginController);



export default router;
import express from "express";
import {registerController,adminLoginController,loginController, deleteUser, convertToAdmin} from "../controller/usercontroller.js";4
import isLogin from "../middleware/islogin.js";
import adminIsLogin from "../middleware/adminLogin.js";
const router= express.Router();

//register User
router.post('/register', registerController);

//login User
router.post('/login', loginController);
//login admin
router.post('/adminlogin', adminLoginController);
//delete user
router.delete('/deleteUser', isLogin, deleteUser );
//user to admin conversion
router.patch("/adminconvert/:id", adminIsLogin, convertToAdmin);



export default router;
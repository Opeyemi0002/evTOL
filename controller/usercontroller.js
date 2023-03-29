import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import tokenGenerator from "../token_folder/tokengenerator.js";

export const registerController = async (req,res) => {
    try{
        const {firstname,lastname,age,gender,email,password} = req.body;
        const userName = await User.findOne({email});

        if(!userName) {
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                firstname,
                lastname,
                 age,
                 gender,
                 email,
                 password:passwordHash
            });
            return res.json({
                status:"success",
                message: `${newUser.firstname}, welcome to the world of possibilities`
            });
        }else{
            return res.json({message:"you have been registered already"});
        }
    }catch(error) {
        res.json(error.message);
    }
}
export const loginController = async (req,res) => {
    try{
        const {email,password} = req.body;
        const userFound = await User.findOne({email});

        if(!userFound) {
            return res.json({message: "please enter a valid username or password"});
        }
        
        const checkpassword = await bcrypt.compare(password,userFound.password);
        if(!checkpassword) {
            return res.json({message:"please enter a valid username or password"});
        }else{
            res.json({
                status:"success",
                data: {
                    firstname:userFound.firstname,
                    lastname:userFound.lastname,
                    token: tokenGenerator(userFound._id)
                }
            });
        }
    }catch(error) {
        res.json(error.message);
    }
}
export const adminLoginController = async (req,res) => {
    try{
        const {email,password} = req.body;
        if(email!=="admin@gmail.com") {
            return res.json({message:"admin email or password is invalid"});
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash("Admin1234",salt);
        const adminPassword = await bcrypt.compare(password,passwordHash);

        if (!adminPassword) {
           return res.json({message:"admin email or password is invalid"}); 
        }else{
            res.json({
                message: "you are now login as an admin",
            });
        }

        }catch(error) {
        res.json(error.message);
    }
}

export const medication = async (req,res) => {
    try{
        
    }catch(error) {
        res.json(error.message);
    }
}
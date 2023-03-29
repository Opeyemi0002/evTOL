import obtainToken from "../token_folder/obtaintoken.js";
import verifyToken from "../token_folder/verifytoken.js";
import User from "./model/userModel.js";
const adminIsLogin = async (req,res,next) => {
    try{
        const token = obtainToken(req);
        const userDecoded = verifyToken(token);
        
        req.userAuth = userDecoded.id;

        const adminUser = await User.findById(req.userAuth)
        if(!adminUser) {
            return res.send('invalid token');
        }else{
          if(adminUser.admin) {
            next();
          }else{
            return res.json({message:"you aren't authorised"});
          }
            
        }
        
    }catch(error) {
        res.json(error.message);
    }
}
 export default adminIsLogin;
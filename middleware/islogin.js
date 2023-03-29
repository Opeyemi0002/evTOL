import obtainToken from "../token_folder/obtaintoken.js";
import verifyToken from "../token_folder/verifytoken.js";

const isLogin = (req,res,next) => {
    try{
        const token = obtainToken(req);
        const userDecoded = verifyToken(token);
        
        req.userAuth = userDecoded.id;
        if(!userDecoded) {
            return res.send('invalid token');
        }else{
            next();
        }
        
    }catch(error) {
        res.json(error.message);
    }
}
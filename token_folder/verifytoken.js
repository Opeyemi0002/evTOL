import jwt from "jsonwebtoken";

const verifyToken = (token)=> {
    try {
        jwt.verify(token,process.env.token_key,(error,decoded)=>{
            if(error) {
                return false;
            }
            if (decoded) {
                return decoded;
            }
        })
    }catch(error) {
        res.json(error.message);
    }
}
export default verifyToken;
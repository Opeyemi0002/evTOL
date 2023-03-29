import jwt from "jsonwebtoken";

const tokenGenerator = (id)=> {
    return jwt.sign({id},process.env.token_key,{expiresIn:process.env.token_expiry});
}

export default tokenGenerator;
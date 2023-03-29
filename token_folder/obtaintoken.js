

const obtainToken = (req) => {
    try{
        const header = req.headers
        const token = header['authorization'].split(' ')[1];

        if(!token) {
            return res.send("please login to be granted access");
        }else{
            return token;
        }
    }catch(error) {
        res.json(error.message)
    }
}

export default obtainToken;
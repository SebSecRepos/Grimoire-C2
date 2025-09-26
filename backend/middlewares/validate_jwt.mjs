import { response } from "express"  
import jwt from 'jsonwebtoken'


const validate_jwt = ( req, res=response, next ) =>{

    const token = req.header('x-token') || req.query.token;

    if(!token) return res.status(400).json({ ok:false, msg:"Invalid authentication token." });

    try {

        const { uid, name } = jwt.verify( token, process.env.SEED );
        req.uid = uid;
        req.name = name;

        next();
        
    } catch (error) {
        
    return res.status(401).json({ ok:false, msg:"Invalid or expired authentication token." });
    }

    
}



export { validate_jwt }

import {response} from "express";
import { register_user } from "../Utils/register_user.mjs";
import { login_user } from "../Utils/login_users.mjs";
import {new_jwt} from '../Utils/jwt.mjs';
import User from "../models/User_model.mjs";
import { update_user } from "../Utils/update_user.mjs";
import { writeLog } from "../Utils/writeLog.mjs";

const register = async(req, res = response) => {
    
    try {

        const adminUser = await User.findById(req.uid);
        
        if (adminUser.role !== "admin") return res.status(400).json({
            ok: false,
            msg: "Permission denied."
        });
        
        let { errors, jwt } = await register_user(req);                                   
        
    if (!jwt) return res.status(400).json({ ok: false, errors });

    return res.status(200).json({ ok: true, msg: "Registration successful.", jwt });
        
    } catch (error) {                                                                   
        
    return res.status(502).json({ ok: false, msg: "Server error." });
    }

}
const update = async(req, res = response) => {
    
    try {

        let { errors=[] } = await update_user(req);                                   
        
    if (errors.length > 0) return res.status(400).json({ ok: false, errors });

    return res.status(200).json({ ok: true, msg: "User updated successfully." });

        
    } catch (error) {                                                                   
        
    return res.status(502).json({ ok: false, errors: ["Server error."] });
    }

}
const delete_user = async(req, res = response) => {

    
    try {
        const { uid, name } = req;
        const { id="" } = req.params;

        const admin_user = await User.findById(uid);
        
        if (admin_user.role !== 'admin') return res.status(403).json({
            ok: false,
            msg: 'Permission denied.'
        });

        const users = await User.findByIdAndDelete(id);
        
    return res.status(200).json({ ok: true, msg: "User deleted successfully." });
        
    } catch (error) {
        
    return res.status(500).json({ ok: false, msg: "Error deleting user." });
    }
    
}


const login = async(req, res = response) => {
   
    try {

        const {errors, jwt, user} = await login_user(req.body);                
        if (!jwt) {
            writeLog(` | Login failed for user ${req.body.user_name || ''}`);
            return res.status(400).json({ ok: false, errors });
        }

        return res.status(200).json({ ok: true, msg: "Login successful.", jwt, data: user });
        
    } catch (error) {
        
    return res.status(500).json({ ok: false, msg: "Server error." });
    }
    
}


const get_users = async(req, res = response) => {

    
    try {
        const { uid, name } = req;

        const admin_user = await User.findById(uid);
        
        if (admin_user.role !== 'admin') return res.status(403).json({
            ok: false,
            msg: 'Permission denied.'
        });

        const users = await User.find().select('user_name role');
        
    return res.status(200).json({ ok: true, msg: "Users fetched successfully.", users });
        
    } catch (error) {
        
    return res.status(500).json({ ok: false, msg: "Server error." });
    }
    
}

const renew = async(req, res = express.response) => {
    
    try {
        
        const { uid, name } = req;
    
    
        const user = await User.findById(uid);

        if (user.isPasswordChanged) return res.status(400).json({
            ok: false,
            msg: "Password has changed. Please log out and log in again."
        });

        const jwt = await new_jwt( uid, name );
    
        return res.status(200).json({
            ok: true,
            message: 'Session renewed.',
            jwt,
            data: {
                user_name: user.user_name,
                role: user.role
            }
        });
    } catch (error) {
        
    return res.status(500).json({ ok: false, message: 'Server error.' });
    }

}



export {register, login, renew, get_users, update, delete_user} 
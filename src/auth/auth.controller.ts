import { AuthService } from "./auth.service.js";

const authService = new AuthService();

async function register(req:any,res:any){
    // 🛡️ Sentinel: Explicitly destructuring only allowed fields to prevent Mass Assignment
    const {name,email,password} = req.body;
    try {
        const user = await authService.register(name,email,password)
        res.status(201).json(user)
    } catch (error:any) {
        // 🛡️ Sentinel: Generic error message to prevent internal detail leakage
        res.status(400).json({error:"Registration failed"})
    }
}

async function login(req:any,res:any){
    const {email,password} = req.body;
    try {
        const user = await authService.login(email,password)
        res.status(200).json(user)
    } catch (error:any) {
        // 🛡️ Sentinel: Generic message to prevent user enumeration and detail leakage
        res.status(400).json({error:"Invalid email or password"})
    }
}

export {login,register}

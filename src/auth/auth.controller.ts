import { AuthService } from "./auth.service.js";

const authService = new AuthService();

async function register(req:any,res:any){
    const {name,email,password} = req.body;
    try {
        // Explicitly pass only name, email, and password to prevent privilege escalation via mass assignment
        const user = await authService.register(name,email,password)
        res.status(201).json(user)
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

async function login(req:any,res:any){
    const {email,password} = req.body;
    try {
        const user = await authService.login(email,password)
        res.status(200).json(user)
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

export {login,register}

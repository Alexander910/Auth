import jwt from "jsonwebtoken"

export function authMiddleware(req:any,res:any,next:any){
    try {
        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            return res.status(500).json({ message: "Error de configuración del servidor" });
        }

        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"token no proporcionado"});
        }
  
        const token = authHeader.split(" ")[1]
        const decoded:any = jwt.verify(token, secretKey);

        req.user = {
            id:decoded.id,
            email:decoded.email,
            role:decoded.role
        }

        next();

    } catch (error:any) {
        return res.status(401).json({message:"No autorizado"});
    }
}
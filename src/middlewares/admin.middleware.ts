export function adminMiddleware(req:any,res:any,next:any){  
    try {
        const userRole = req.user?.role;
        if(userRole !== "admin"){
            return res.status(403).json({error:"Acceso denegado. Solo administradores pueden acceder a esta ruta."})
        }
        next();
    } catch (error:any) {
        res.status(403).json({message:"Acceso denegado. No se pudo verificar el rol del usuario."})
    }
}
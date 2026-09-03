import jwt from "jsonwebtoken";

export default function generateToken(payload:any){

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT_SECRET no está configurado");
    }

    const token = jwt.sign(
        payload,
        secretKey,
        { expiresIn: "1h" }
    );

    return token;
}
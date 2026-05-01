import expres from 'express';
import { login, register } from './auth/auth.controller.js';
import { currentUser } from './users/user.controller.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { adminMiddleware } from './middlewares/admin.middleware.js';

const router = expres.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/user',authMiddleware,currentUser)
router.get("/administrador",authMiddleware,adminMiddleware,(req,res)=>{
    res.send("Bienvenido, administrador");
});

export default router;
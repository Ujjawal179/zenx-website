import { Router } from 'express';
import { register, login, logout, updateUser } from '../controllers/userController';
import authMiddleware from '../middleware/protectedRoutes';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.put("/update",authMiddleware,updateUser)

export default router;

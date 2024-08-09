import { Router } from 'express';
import authMiddleware from '../middleware/protectedRoutes';
import { createGym } from '../controllers/gymController';

const router = Router();

router.post("/createGym",authMiddleware, createGym);


export default router;

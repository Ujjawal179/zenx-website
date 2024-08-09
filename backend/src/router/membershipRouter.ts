import { Router } from 'express';
import authMiddleware from '../middleware/protectedRoutes';
import { buyMembership, getMemberships, postMembership } from '../controllers/membershipController';


const router = Router();

router.post("/postMembership",authMiddleware,postMembership);
router.get("/getMemberships", authMiddleware, getMemberships);
router.post("/buyMembership",authMiddleware,buyMembership);


export default router;

import { Router } from "express";
import checkController from "../controllers/userController";


const router = Router();

router.get('/',checkController);

export default router;
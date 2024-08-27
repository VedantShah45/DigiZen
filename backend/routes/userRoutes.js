import express from 'express'
import { loginUserController, logoutUserController, registerUserController } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/signup', registerUserController);
router.post('/login', loginUserController);
router.get('/logout', logoutUserController);

export default router;
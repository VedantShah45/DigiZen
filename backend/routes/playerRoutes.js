import express from 'express';
import { createPlayerProfile,updatePlayerProfile } from '../controllers/playerController.js';


const router=express.Router()

router.route('/profile/:id').post(createPlayerProfile).patch(updatePlayerProfile)

export default router
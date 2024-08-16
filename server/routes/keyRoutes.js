import express from 'express';
import { storeKey } from '../controllers/keyController.js';

const router = express.Router();
router.post('/', storeKey);

export default router;

import express from 'express';
import { verifyMessage } from '../controllers/verifyController.js';

const router = express.Router();
router.post('/', verifyMessage);

export default router;

import express from 'express';
import { getServerStatus } from '../controllers/statusController.js';

const router = express.Router();

router.get('/server-status', getServerStatus);

export default router;
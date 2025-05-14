import express from 'express';
import { getServerStatus, checkHostsStatus } from '../controllers/statusController.js';

const router = express.Router();

router.get('/server-status', getServerStatus);
router.post('/check-hosts', checkHostsStatus); // Nuevo endpoint

export default router;
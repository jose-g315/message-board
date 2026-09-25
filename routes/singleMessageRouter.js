import { Router } from 'express';
import { getMessage } from '../controllers/messageController.js';

const singleMessageRouter = Router();

singleMessageRouter.get('/:messageId', getMessage);

export { singleMessageRouter };

import { Router } from 'express';
import { getMessages } from '../controllers/messageController.js';

const indexRouter = Router();
indexRouter.get('/', getMessages);

export { indexRouter };

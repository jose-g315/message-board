import { Router } from 'express';
import {
	addMessage,
	getMessageForm,
} from '../controllers/messageController.js';

const messageRouter = Router();

messageRouter.get('/', getMessageForm);
messageRouter.post('/', addMessage);

export { messageRouter };

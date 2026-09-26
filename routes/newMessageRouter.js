import { Router } from 'express';
import {
	addMessage,
	getMessageForm,
} from '../controllers/messageController.js';

const newMessageRouter = Router();

newMessageRouter.get('/', getMessageForm);
newMessageRouter.post('/', addMessage);

export { newMessageRouter };

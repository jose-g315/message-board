import { Router } from 'express';
import {
	createMessageGet,
	createMessagePost,
	messageGet,
	messagesListGet,
} from '../controllers/messageController.js';
import {
	validateMessage,
	validateMessageId,
} from '../middleware/messageValidation.js';
import {
	handleParamErrors,
	handleValidationErrors,
} from '../middleware/validation.js';

const messageRouter = Router();

messageRouter.get('/', messagesListGet);
messageRouter.get('/new', createMessageGet);
messageRouter.post(
	'/new',
	validateMessage,
	handleValidationErrors,
	createMessagePost
);
messageRouter.get(
	'/message/:messageId',
	validateMessageId,
	handleParamErrors,
	messageGet
);

export { messageRouter };

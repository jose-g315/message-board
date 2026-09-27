import { matchedData } from 'express-validator';
import { addMessage, getMessage, listMessages } from '../models/messagesDB.js';

function createMessagePost(req, res) {
	const { user, message } = matchedData(req);
	addMessage(user, message);
	res.redirect('/');
}
function messagesListGet(req, res) {
	res.render('index', { messages: listMessages() });
}
function createMessageGet(req, res) {
	res.render('messageForm');
}
function messageGet(req, res) {
	const message = getMessage(req.params.messageId);
	if (!message) {
		return res.status(404).render('error', { error: '404-Message Not Found' });
	}
	res.render('message', { message: message });
}

export { createMessageGet, createMessagePost, messageGet, messagesListGet };

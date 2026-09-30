import { matchedData } from 'express-validator';
import { addMessage, getAllMessages, getMessage } from '../models/queries.js';

async function createMessagePost(req, res) {
	const { username, message } = matchedData(req);
	await addMessage(username, message);
	res.redirect('/');
}
async function messagesListGet(req, res) {
	const messages = await getAllMessages();
	res.render('index', { messages: messages });
}
function createMessageGet(req, res) {
	res.render('messageForm');
}
async function messageGet(req, res) {
	const message = await getMessage(matchedData(req).messageId);
	if (!message) {
		return res.status(404).render('error', { error: '404-Message Not Found' });
	}
	res.render('message', { message: message });
}

export { createMessageGet, createMessagePost, messageGet, messagesListGet };

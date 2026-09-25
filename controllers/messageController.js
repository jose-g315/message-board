const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
		id: crypto.randomUUID(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
		id: crypto.randomUUID(),
	},
];

function addMessage(req, res) {
	// validating on the backend incase user bypasses form requirements
	if (
		!req.body.user ||
		!req.body.message ||
		req.body.user.trim().length === 0 ||
		req.body.message.trim().length === 0
	) {
		return res.status(400).send('User and message cannot be empty');
	}
	const newMessage = {
		user: req.body.user,
		text: req.body.message,
		added: new Date(),
		id: crypto.randomUUID(),
	};
	messages.push(newMessage);
	res.redirect('/');
}
function getMessages(req, res) {
	res.render('index', { messages: messages });
}
function getMessageForm(req, res) {
	res.render('messageForm');
}
function getMessage(req, res) {
	const message = messages.find(
		(obj) => String(obj.id) === req.params.messageId
	);
	res.render('message', { message: message });
}

export { addMessage, getMessages, getMessageForm, getMessage };

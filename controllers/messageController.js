const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
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

export { addMessage, getMessages, getMessageForm };

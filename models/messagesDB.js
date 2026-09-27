const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
		id: crypto.randomUUID(),
	},
	{
		text: 'Hello World! Loving this new message board architecture.',
		user: 'Charles',
		added: new Date(),
		id: crypto.randomUUID(),
	},
	{
		text: 'Does anyone know the best way to handle routing middleware?',
		user: 'Jane',
		added: new Date(),
		id: crypto.randomUUID(),
	},
	{
		text: 'Hey everyone, glad to be here!',
		user: 'Sam',
		added: new Date(),
		id: crypto.randomUUID(),
	},
	{
		text: 'Just testing out the MVC controller logic. Works perfectly!',
		user: 'Alex',
		added: new Date(),
		id: crypto.randomUUID(),
	},
];
function listMessages() {
	return messages;
}
function addMessage(user, message) {
	const newMessage = {
		user: user,
		text: message,
		added: new Date(),
		id: crypto.randomUUID(),
	};
	messages.push(newMessage);
}
function getMessage(id) {
	return messages.find((message) => message.id === id);
}

export { addMessage, getMessage, listMessages };

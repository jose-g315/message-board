import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello ');
});

app.listen(PORT, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Listening on port ${PORT} ...`);
});

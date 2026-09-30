import express from 'express';
import path from 'path';
import { messageRouter } from './routes/messageRouter.js';

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;
const currDir = import.meta.dirname;

// setting template engine ejs
app.set('views', path.join(currDir, 'views'));
app.set('view engine', 'ejs');

// static assets
const assetsPath = path.join(currDir, 'public');
app.use(express.static(assetsPath));

// to parse the incoming post form data
app.use(express.urlencoded({ extended: true }));

// defined routes and their routers
app.use('/', messageRouter);

// error handling middleware
app.use((req, res) => {
	res.status(404).render('error', { error: '404-Page Not Found' });
});
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).render('error', { error: '500-Something Went Wrong' });
});

app.listen(PORT, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Listening on port ${PORT} ...`);
});

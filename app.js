import express from 'express';
import path from 'path';
import { indexRouter } from './routes/indexRouter.js';
import { messageRouter } from './routes/messageRouter.js';

const app = express();
const PORT = 3000;
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
app.use('/new', messageRouter);
app.use('/', indexRouter);

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err);
});

app.listen(PORT, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Listening on port ${PORT} ...`);
});

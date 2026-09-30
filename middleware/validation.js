import { validationResult } from 'express-validator';

function handleValidationErrors(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).render('messageForm', {
			errors: errors.array(),
		});
	}
	next();
}
function handleParamErrors(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(404).render('error', { error: '404-Message Not Found' });
	}
	next();
}

export { handleParamErrors, handleValidationErrors };

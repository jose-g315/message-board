import { validationResult } from 'express-validator';

function handleValidationErrors(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).render('error', {
			error: errors
				.array()
				.map((e) => e.msg)
				.join(', '),
		});
	}
	next();
}

export { handleValidationErrors };

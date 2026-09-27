import { body } from 'express-validator';

const validateMessage = [
	body('user')
		.trim()
		.isLength({ min: 1, max: 10 })
		.withMessage('Invalid Username Length')
		.isString()
		.withMessage('Invalid:Must be a String'),
	body('message')
		.trim()
		.isLength({ min: 1, max: 50 })
		.withMessage('Invalid Message Length')
		.isString()
		.withMessage('Invalid:Must be a String'),
];

export { validateMessage };

#! /usr/bin/env node

import { Client } from 'pg';

const databaseUrl = process.argv[2];
if (!databaseUrl) {
	console.error('Please provide a database URL connection string!');
	process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 10) NOT NULL,
  text VARCHAR( 50 ) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text) VALUES 
    ('Bryan', 'Hello world!'),
    ('Odin', 'Skol!'),
    ('Damon', 'Good morning!');
`;

async function main() {
	console.log('seeding...');
	const client = new Client({
		connectionString: process.argv[2],
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log('done');
}

main();

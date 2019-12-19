const dotenv = require('dotenv').config();
const express = require('express');
const sirv = require('sirv');
const proxy = require('http-proxy-middleware');

const { PORT = 5000 } = process.env;

express()
	.use(
		proxy('/api', {
			changeOrigin: true,
			target: process.env.HOST
		}),
		sirv('public', { dev: true, single: true })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

console.log(`Dev server started at: http://localhost:${PORT}`);

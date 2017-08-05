import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express()
			
	.get('/vcf', ({req, res}) => res.download(__dirname + '/static/Roman-Ožana.vcf', 'Roman Ožana.vcf'))
	.get('/me', ({req, res}) => res.download(__dirname + '/static/img/roman-ozana.jpg', 'Roman Ožana.jpg'))

	// rest
	.get('*', (req, res) => {
		return handle(req, res)
	})

	// listen on port
	.listen(3000, (err) => {
		if (err) throw err;
		console.log('> Ready on http://localhost:3000');
	});

});
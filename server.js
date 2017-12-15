import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express()

			.get('/vcf', ({req, res}) => res.download(__dirname + '/static/ozana.vcf', 'Roman Ožana.vcf'))
			.get('/cv', ({req, res}) => res.download(__dirname + '/static/cv.pdf', 'Roman Ožana - Resume.pdf'))
			.get('/me', ({req, res}) => res.download(__dirname + '/static/img/roman-ozana.jpg', 'Roman Ožana.jpg'))


			// rest
			.get('*', (req, res) => {
				return handle(req, res)
			})

			// listen on port
			.listen(3000, (err) => {
				if (err) throw err;
			});

});
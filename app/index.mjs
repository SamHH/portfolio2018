import dotenv from 'dotenv';
import cjs from './helpers/cjs';
import Koa from 'koa';
import helmet from 'koa-helmet';
import mount from 'koa-mount';
import serve from 'koa-static';
import views from 'koa-views';
import router from './router';

// Environment variables
dotenv.config();

// Server
const app = new Koa();

// Helmet
app.use(helmet());

// Static assets
app.use(mount('/static', serve(`${cjs.__dirname}/static/`, {
	// Set service worker header
	setHeaders: (res, path) => {
		if (path.endsWith('/static/scripts/sw.js')) res.setHeader('Service-Worker-Allowed', '/');
	},
})));

// Views
app.use(views(`${cjs.__dirname}/views/`, { extension: 'pug' }));

// Locals
app.use(async (ctx, next) => {
	ctx.state.title = 'Sam A. Horvath-Hunt';

	await next();
});

// Router
app.use(router.routes());

// Start the server
const webServerPort = process.env.WEB_SERVER_PORT;

if (!webServerPort) {
	throw new Error('Could not parse web server port. Your environment variables may be misconfigured.');
}

app.listen(webServerPort, (err) => {
	if (err) console.error(err);
	else console.log(`Server started: http://localhost:${webServerPort}/`);
});

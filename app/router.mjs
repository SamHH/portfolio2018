import Router from 'koa-router';
import resume from './data/resume.json';

const router = new Router();

// Redirect all unrecognised GET requests back to home
router.get('/', ctx => ctx.render('pages/portfolio', { ...resume }));
router.get('*', ctx => ctx.redirect('/'));

export default router;

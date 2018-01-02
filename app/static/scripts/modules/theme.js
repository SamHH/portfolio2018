export default () => {
	const theme = localStorage.getItem('theme');

	if (theme === 'dark') document.documentElement.classList.add('t-dark');
	else if (theme === undefined) localStorage.setItem('theme', 'light');

	// Allow page transitions now that we've set theme. Set timeout length to
	// longest theme transition
	setTimeout(() => {
		document.documentElement.classList.remove('u-transitions-disabled');
	}, 400);

	const toggleEl = document.querySelector('.js-themer');

	if (!toggleEl) return;

	toggleEl.addEventListener('click', () => {
		localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
		document.documentElement.classList.toggle('t-dark');
	});
};

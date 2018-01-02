export default () => {
	// This scope must be supported by server-side header
	navigator.serviceWorker.register('/static/scripts/sw.js', { scope: '/' });
};

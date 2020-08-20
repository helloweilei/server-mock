const router = require('./router.js');

module.exports = {
	applyMiddlewares: function(app) {
		/*app.use((ctx, next) => {
			ctx.body = 'hello koa!';
		});*/
		router(app);
	}
}
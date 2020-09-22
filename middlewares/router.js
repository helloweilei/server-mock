const router = new require('koa-router')();
const { extend } = require('../utils.js');
const mockData = require('../mock/index.js');

module.exports = function(app) {
	// router.get('/', ctx => ctx.body = 'hello world!');
	mockData.forEach(({ path, method = 'get', data }) => {
		router[method](path, (ctx, next) => {
			data = typeof data === 'function'
				? data(ctx, next, app)
				: data;
			ctx.body = {
				code: 0,
				message: 'success',
				data: extend(data)
			};
		});
	});
	app.use(router.routes())
		.use(router.allowedMethods());
}
const router = new require('koa-router')();

module.exports = function(app) {
	router.get('/', ctx => ctx.body = 'hello world!');
	router.get('/api/sms-shop-app-cn/staff/allUsers', ctx => {
		ctx.body = { "code": 0, "message": "³É¹¦", "data": [{ "createTime": null, "nickname": "autel_dQc86iQTrx", "avatar": "", "shopId": "", "roleList": null, "userId": "1277575454325694465", "username": "autel_dQc86iQTrx" }] };
	});
	app.use(router.routes())
		.use(router.allowedMethods());
}
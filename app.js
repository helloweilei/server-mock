const Koa = require('koa');
const http = require('http');
const { applyMiddlewares } = require('./middlewres');

const app = new Koa();
applyMiddlewares(app);

const server = http.createServer(app.callback());

const port = process.env.port || 8085;
server.listen(port, () => {
	console.log('server is listening at: ' + port);
});



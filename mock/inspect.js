const service = require('./service/inspect.js');

module.exports = {
	prefix: '/api/sms-inspection-diagnosis-app-cn',
	routes: [{
		method: 'get',
		path: '/inspection/info',
		data: service.getAll
	}, {
		method: 'get',
		path: '/iad/report',
		data: []
	}, {
		method: 'post',
		path: '/inspection/item',
		data: service.update
	}]
}
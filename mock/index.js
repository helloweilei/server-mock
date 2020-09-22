const fs = require('fs');
const path = require('path');

const mockData = [];
const files = fs.readdirSync(__dirname);

files.filter(file => {
		const stats = fs.statSync(path.resolve(__dirname, file));
		return stats.isFile();
	})
	.filter(file => file !== 'index.js')
	.forEach(file => {
		const mod = require('./' + file);
		mockData.push(...mod.routes.map(route => ({
			...route,
			path: path.posix.join(mod.prefix, route.path)
		})));
	});

module.exports = [
	// just for test
	{
		method: 'get',
		path: '/person',
		data() {
			return {
				name: Mock.Random.cname(),
				age: Mock.Random.integer(10, 50),
				birth: Mock.Random.date('yyyy-MM-dd')
			}
		}
	},
	...mockData
]
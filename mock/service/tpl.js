const Mock = require('mockjs');

module.exports = [{
	name: 'Battery',
	id: '1001',
	medias: [],
	remark: '',
	subCategories: [{
		name: 'Dry Battery',
		inspectionItemList: [{
			name: 'Voltage',
			result: 0,
			factors: [{
				name: 'Good Test From Tool',
				type: 'success'
			}, {
				name: 'Needs Pepair Soon',
				type: 'warning'
			}, {
				name: 'Needs Replacement Soon',
				type: 'error'
			}]
		}, {
			name: 'Cold Cranking Amps',
			result: 0,
			factors: [{
				name: 'Good Test From Tool',
				type: 'success'
			}, {
				name: 'Needs Pepair Soon',
				type: 'error'
			}, {
				name: 'Needs Replacement Soon',
				type: 'error'
			}]
		}]
	}]
}];
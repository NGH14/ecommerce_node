const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27018/';

class Database {
	constructor {
	this.connect();
	};
	
	mongoose
	.connect(connectionString)
	.then((_) => console.log('Connected DB'))
	.catch((error) => console.error(error));
	static getInstance () {
		if (!Database.instance) {
			Database.instance = new Database();
		}
	}
	return Database.instance
};


const instanceDB = Database.getInstance();
module.exports = instanceDB

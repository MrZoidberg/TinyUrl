"use strict";

var mysql = require('mysql');

var mysqlHost   = process.env.DB_HOST;
var mysqlPass   = process.env.DB_PASS;
var mysqlDb   = process.env.DB_DATABASE;

var dbConn = mysql.createConnection({
	host: mysqlHost,
	user: 'root',
	password:mysqlPass,
	database: mysqlDb
});

var dbConnect = function(){
	dbConn.connect();
};

var dbEndConnection = function(){
	dbConn.end();
};

var insertUrl = function(urlStr, callback){
	var newUrl = {
		url: urlStr
	};

	var query = dbConn.query('insert into tinyurl set ?', newUrl, function(err, result){
		console.log(query.sql);

		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		console.log('connected as id ' + dbConn.threadId);

		if(result){
			console.log(result);

			callback(result.insertId);
		}
	});
};

var getUrlById = function(id, callback){
	var query = dbConn.query('select url from tinyurl where id = ?', id, function(err, rows, fields){
		console.log(query.sql);

		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		console.log('connected as id ' + dbConn.threadId);

		callback(rows[0]);
	});
};

var getExistedUrl = function(url, callback){
	var query = dbConn.query('select id from tinyurl where url = ?', url, function(err, rows, fields){
		console.log(query.sql);

		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		console.log('connected as id ' + dbConn.threadId);

		callback(rows);
	});
};

module.exports = {
	dbConnect: dbConnect,
	dbEndConnection: dbEndConnection,
	insertUrl: insertUrl,
	getUrlById: getUrlById,
	getExistedUrl: getExistedUrl
};

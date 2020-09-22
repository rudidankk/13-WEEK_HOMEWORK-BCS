var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection({
	    host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	    user: "ttgzqds9gpzbky00",
	    password: "xz0jfxq6ifmvxdm7",
	    database: "k1b8cdujshre0lfc"
	});
} else {
	connection = mysql.createConnection({
	    host: "localhost",
	    user: "root",
	    password: "root",
	    database: "burgers_db"
	});
};

connection.connect();
module.exports = connection;
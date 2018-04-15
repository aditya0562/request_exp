const mysql = require('mysql');
const express = require('express');

const app = express();
app.get('/fetch', (req, res) => {

	const connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'Aditya1234',
	  database : 'bigbasket1'
	});

	connection.connect();

	connection.query('SELECT * from product_product limit 20', function (error, results, fields) {
	  if (error) throw error;
	  res.send('The solution is: ');
	});

	connection.end();
})
app.listen(3009);
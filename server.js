const http = require('http');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
const product = require('./app/controllers/fetchProduct');
const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const sequelize = new Sequelize('request_test', 'root', 'Aditya1234', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
      max: 40,
      min: 1,
  }
});

const model = sequelize.import(__dirname + "/models/productSchema");
console.log(model);
process.dbModel = model;

sequelize.sync()
 .then(() => {
    app.get('/fetch', product.fetchProducts)
 })


http.createServer(app).listen(3009);

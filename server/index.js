const express = require("express"); //This is how to import 'express' which is a framework/library
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const port = 3000;
const app = express(); //This is a standard node express convention

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

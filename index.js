const express = require('express');
const mongoose = require('mongoose');
//const path = require('path');
const cors = require('cors')

const product = require('./routes/product');
const seller = require('./routes/seller');
const order = require('./routes/order');
const user = require('./routes/user');

const {notFound} = require('./middlewares/notFound')
const {errorMW} = require('./middlewares/error')

const app = express();
const port = process.env.PORT || 3456;

app.use( cors({origin:'*'}) )
app.use(express.json());
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/ECommerceDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Use routes
app.use('/products', product);
app.use('/sellers', seller);
app.use('/orders', order);
app.use('/users', user);

//serve static files
app.use(express.static("public"))
//app.use(express.static(path.join(__dirname, 'public')));

//not found middleware
app.use('*', notFound )

//error handling middleware
app.use(errorMW)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

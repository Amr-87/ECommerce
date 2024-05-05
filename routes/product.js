const express = require('express');
const router = express.Router();
const Controller = require('../controllers/product');

// Create a new product
router.post('/', Controller.createProduct);

// Get all products
router.get('/', Controller.getAllProducts);

// Get product by ID
router.get('/:id', Controller.getProductById);

// Update product by ID
router.put('/:id', Controller.updateProductById);

// Delete product by ID
router.delete('/:id', Controller.deleteProductById);

// Search for products by name or seller
router.get('/search', Controller.searchProducts);

module.exports = router;

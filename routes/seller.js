const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/seller');

// Create a new seller
router.post('/', sellerController.register);

// Get all sellers
router.get('/', sellerController.getAllSellers);

// Get seller by ID
router.get('/:id', sellerController.getSellerById);

// Update seller by ID
router.put('/:id', sellerController.updateSellerById);

// Delete seller by ID
router.delete('/:id', sellerController.deleteSellerById);

module.exports = router;

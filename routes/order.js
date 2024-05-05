const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

// Route for creating a new order
router.post('/', orderController.createOrder);

// Route for getting all orders
router.get('/', orderController.getAllOrders);

// Route for getting an order by ID
router.get('/:id', orderController.getOrderById);

// Route for updating an order by ID
router.put('/:id', orderController.updateOrderById);

// Route for deleting an order by ID
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;

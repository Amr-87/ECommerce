
const {Order} = require('../models/order');

exports.createOrder = async (req, res, next) => {
        const createdOrder = await Order.create(req.body).catch(next)
        res.status(201).json({
            status: 'success',
            data:{
                data: createdOrder
            }
        }) 
}

exports.getAllOrders = async (req, res , next) => {
        const orders = await Order.find().populate("products user").catch(next)
        res.status(200).json({
            status: 'success',
            result: orders.length,
            data:{
                data: orders
            }
        })
}

exports.getOrderById = async (req, res , next) => {
        const order = await Order.findById(req.params.id).catch(next)
        if (!order) {
            return res.status(404).json({
                status: 'fail',
                message: 'Order not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data:{
                data: order
            }
        });
};

exports.updateOrderById = async (req, res,next) => {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(next)
        if (!order) {
            return res.status(404).json({
                status: "fail",
                message: 'Order not found' 
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                data: order
            }
        })
}

exports.deleteOrderById = async (req, res, next) => {
        const order = await Order.findByIdAndDelete(req.params.id).catch(next)
        if (!order) {
            return res.status(404).json({
                status: 'fail',
                message: 'Order not found'
            });
        }
        res.json({
            status: 'success',
            message: 'Order deleted'
        });
};

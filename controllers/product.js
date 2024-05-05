const {Product} = require('../models/product');

exports.createProduct = async (req, res) => {
    const newProduct = req.body
    try {
        const createdProduct = await Product.create(newProduct);
        res.status(201).json({
            status: 'success',
            data:{
                data: createdProduct
            }
        });
    } catch (err) {
        res.status(400).json({ 
            status: 'fail',
            message: err.message
        });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('seller').select("-createdAt -updatedAt")
        res.status(200).json({
            status: 'success',
            result: products.length,
            data:{
                data: products
            }
        });
    } catch (err) {
        res.status(500).json({ 
            status: 'error',
            message: err.message
        });
    }
};

exports.getProductById = async (req, res) => {
    const {id} = req.params
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'Product not found' });
        }
        res.status(200).json({
            status: 'success',
            data:{
                data: product
            }
        }) 
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.updateProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id , req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({
            status: 'success',
            data:{
                data: product
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'Product not found' 
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Search for products by name or seller
exports.searchProducts = async (req, res) => {
    const query = req.query.q;
    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { seller: { $regex: query, $options: 'i' } }
            ]
        });
        if (products.length === 0) {
            return res.status(200).json({
                status: 'fail',
                message: 'No products found matching the search query'
            });
        }        
        res.status(200).json({
            status: 'success',
            data:{
                data: products
            }
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

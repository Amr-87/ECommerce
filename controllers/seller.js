const {Seller} = require('../models/seller');

// Create a new seller
exports.register = async (req, res) => {
    try {
        const seller = new Seller(req.body);
        await seller.save();
        res.status(201).json(seller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all sellers
exports.getAllSellers = async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.json(sellers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single seller by ID
exports.getSellerById = async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id);
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json(seller);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a seller by ID
exports.updateSellerById = async (req, res) => {
    try {
        const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json(seller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a seller by ID
exports.deleteSellerById = async (req, res) => {
    try {
        const seller = await Seller.findByIdAndDelete(req.params.id);
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json({ message: 'Seller deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

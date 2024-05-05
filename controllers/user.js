const {User} = require('../models/user');

// register
exports.register = async (req, res , next) => {
        const user = await User.create(req.body).catch(next);
        res.status(201).json(user);
};

// Get all users
exports.getAllUsers = async (req, res , next) => {
        const users = await User.find().select('-password').catch(next)
        res.status(200).json({
            status: 'success',
            result: users.length,
            data: {
                data: users
            }
        });
};

// Get a single user by ID
exports.getUserById = async (req, res, next) => {
        let {id} = req.params 
        const user = await User.findById(id).select('fullName email -_id').catch(next)
        if (!user) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'User not found' 
            })
        }
        res.status(200).json({
            status: 'success',
            data:{
                data: user
            }
        })
};

// Update a user by ID
exports.updateUserById = async (req, res ,next) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(next)
        if (!user) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'User not found' 
            })
        }
        res.status(200).json({
            status: 'success',
            data:{
                data: user
            }
        })};

// Delete a user by ID
exports.deleteUserById = async (req, res,next) => {
        const user = await User.findByIdAndDelete(req.params.id).catch(next)
        if (!user) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'User not found' 
            })
        }
        res.status(204).json({ 
            status: 'success',
            message: 'User deleted' 
        })
}

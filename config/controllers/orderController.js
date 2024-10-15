// controllers/orderController.js
const Order = require('../models/Order');
const Product = require('../models/Product');

// Place an order
exports.placeOrder = async (req, res) => {
    try {
        const { items } = req.body;
        let totalPrice = 0;

        // Calculate total price
        for (const item of items) {
            const product = await Product.findById(item.product);
            totalPrice += product.price * item.quantity;
        }

        const newOrder = new Order({ items, totalPrice });
        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Simulate quick delivery
exports.deliverOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = 'Delivered';
        await order.save();
        res.json({ message: 'Order delivered', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

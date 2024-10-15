// routes/orderRoutes.js
const express = require('express');
const { placeOrder, deliverOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/', placeOrder);
router.put('/deliver/:id', deliverOrder);

module.exports = router;

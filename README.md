# Phase-2---Hacking-Period-Vibhav
Goal: Build a backend service where users can:  View available grocery items Add items to a cart Place an order Receive quick delivery (simulated)
# Quick Grocery Delivery System

## Overview
This project is a simple backend service for a quick grocery delivery system. Users can view products, add them to the cart, place an order, and receive fast deliveries.

### Technologies Used
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Cosmocloud (can be integrated)

## Features
- **View Products**: View a list of available groceries.
- **Add to Cart**: Add grocery items to the cart.
- **Place Order**: Place an order for selected items.
- **Quick Delivery Simulation**: Simulate delivery of groceries.

## How to Run
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Add your MongoDB connection string in a `.env` file.
4. Run the server using `npm start`.
5. The API will be available at `http://localhost:5000/api/products` and `http://localhost:5000/api/orders`.

### Example Requests
- `GET /api/products`
- `POST /api/orders` (Place an order)
- `PUT /api/orders/deliver/:id` (Mark an order as delivered)

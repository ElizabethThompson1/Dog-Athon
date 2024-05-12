const express = require('express');
const router = express.Router();
const { addProductToSnipcart, getCartByUserIdOrToken, getProductByIdFromSanity } = require('./snipcart');

// Route to add a product to the shopping cart
router.post('/:userId/:productId', async (req, res) => {
    try {
        const { userId, productId } = req.params;
        // You may need additional parameters in the request body, like type
        // const { type } = req.body;
        
        // Call the function to add the product to the cart
        await addProductToSnipcart(productId, userId);
        
        res.status(200).json({ message: 'Product added to the shopping cart successfully' });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ error: 'Failed to add product to cart' });
    }
});

// Route to get the user's cart by userId or token
router.get('/:userIdOrToken/cart', async (req, res) => {
    try {
        const { userIdOrToken } = req.params;
        
        // Call the function to get the user's cart
        const userCart = await getCartByUserIdOrToken(userIdOrToken);
        
        res.status(200).json(userCart);
    } catch (error) {
        console.error('Error fetching user cart:', error);
        res.status(500).json({ error: 'Failed to fetch user cart' });
    }
});

// Route to get product information by productId
router.get('/product/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        
        // Call the function to get product information
        const product = await getProductByIdFromSanity(productId);
        
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product information:', error);
        res.status(500).json({ error: 'Failed to fetch product information' });
    }
});

module.exports = router;

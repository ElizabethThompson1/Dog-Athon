const { getUserCart, addItemToCart } = require('./snipcart');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create the Sanity client instance
const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  useCdn: false,
  token: process.env.TOKEN,
  apiVersion: "2022-02-03"
});
// Function to retrieve product information from Sanity
const getProductByIdFromSanity = async (productId) => {
    try {
        // Query Sanity to retrieve product information based on the product ID
        const product = await client.fetch(`*[_type == "product" && _id == $productId][0]`, { productId });

        return product;
    } catch (error) {
        console.error('Error fetching product from Sanity:', error);
        throw new Error('Failed to fetch product from Sanity');
    }
};

// Function to add product to Snipcart
const addProductToSnipcart = async (productId, userIdOrToken) => {
    try {
        // Retrieve product information from Sanity
        const product = await getProductByIdFromSanity(productId);

        // Construct item details for Snipcart
        let itemDetails = {
            name: product.name,
            price: product.price,
            imageUrl: product.image,
            // Add other relevant product details here
        };

        // If the product type is gear and it has a size attribute
        if (product.type === 'gear' && product.size) {
            itemDetails = {
                ...itemDetails,
                size: product.size, // Assuming the size attribute is named 'size'
            };
        }

        // Retrieve user's cart based on user ID or token
        const userCart = await getUserCart(userIdOrToken);

        // Add the product item to the user's cart in Snipcart
        await addItemToCart(userCart.id, itemDetails);

        console.log('Product added to Snipcart successfully');
    } catch (error) {
        console.error('Error adding product to Snipcart:', error);
        throw new Error('Failed to add product to Snipcart');
    }
};

const getCartByUserIdOrToken = async (userIdOrToken) => {
    try {
        // Call the getUserCart function to retrieve the user's cart
        const userCart = await getUserCart(userIdOrToken);
        return userCart;
    } catch (error) {
        console.error('Error fetching cart by user ID or token:', error);
        throw new Error('Failed to fetch cart by user ID or token');
    }
};


module.exports = {
    addProductToSnipcart,
    getCartByUserIdOrToken,
    getProductByIdFromSanity,
};

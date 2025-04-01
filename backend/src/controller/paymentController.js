const { PrismaClient } = require('@prisma/client')
const { createCheckoutSession, createCartCheckoutSession} = require('../services/stripeService');
//initialize prismaClient
const prisma = new PrismaClient();


// Controller to handle single product payment
async function payForSingleProduct(req, res) {
    try {
        const { product_id } = req.body;

        // Fetch product details from the database
        const product = await prisma.product.findUnique({
            where: { product_id: parseInt(product_id) }
        });

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Create Stripe checkout session
        const sessionUrl = await createCheckoutSession(product);

        // Send the session URL to the frontend
        res.json({ url: sessionUrl });

    } catch (error) {
        console.error("Payment Error:", error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}

async function checkoutCart(req, res) {
    try {
        const { reg_id } = req.body;

        const cartItems = await prisma.cart.findMany({
            where: { reg_id },
            include: { product: true }
        });

        if (cartItems.length === 0) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        const sessionUrl = await createCartCheckoutSession(cartItems);

        res.json({ url: sessionUrl });

    } catch (error) {
        console.error("Cart Checkout Error:", error);
        res.status(500).json({ error: "Failed to process cart checkout" });
    }
}



module.exports = { payForSingleProduct , checkoutCart};
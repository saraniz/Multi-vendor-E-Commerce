require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession(product) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], // for Accepting card payments
            line_items: [
                {
                    price_data: {
                        currency: "usd",                       // image 👇
                        product_data: { name: product.name, images: [product.product_image] },
                        unit_amount: product.price * 0.33 // Convert price to cents
                    },
                    quantity: 1
                }
            ],
            mode: "payment", // One-time payment
            success_url: `${process.env.BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/payment-cancelled`
        });

        return session.url; // Return the checkout session URL
    } catch (error) {
        console.error("Stripe Error:", error);
        throw new Error("Failed to create checkout session");
    }
}


async function createCartCheckoutSession(cartItems) {
    try {
        if (cartItems.length === 0) {
            throw new Error("Cart is empty");
        }

        // Map cart items to Stripe's format
        const lineItems = cartItems.map(item => ({
            price_data: {
                currency: "usd",                                // images 👇
                product_data: { name: item.product.name,    images: [item.product.product_image]},
                unit_amount: parseFloat(item.price) * 0.33,

            },
            quantity: item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/payment-cancelled`
        });

        return session.url;
    } catch (error) {
        console.error("Stripe Cart Checkout Error:", error);
        throw new Error("Failed to create cart checkout session");
    }
}

module.exports = { createCheckoutSession , createCartCheckoutSession};

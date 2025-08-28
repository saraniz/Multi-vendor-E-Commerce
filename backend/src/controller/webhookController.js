const { PrismaClient } = require('@prisma/client');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

module.exports = async (req, res) => {
     console.log("📡 Webhook received..."); 


    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET); 
    } catch (err) {
        console.error('❌ Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') { 
        const session = event.data.object;

        try {
            const reg_id = parseInt(session.metadata?.reg_id)||72; // 👈 get reg_id from metadata

            if (!reg_id || isNaN(reg_id)) {
                console.error("❌ Invalid reg_id in session metadata.");
                return res.status(400).json({ error: "Missing reg_id" });
            }

            await prisma.payment.create({ 
                data: {
                    stripeSessionId: session.id,
                    amount: session.amount_total / 100,
                    status: session.payment_status,
                    paymentMethod: session.payment_method_types[0],
                    reg_id: reg_id
                }
            });

            console.log("✅ Payment saved to DB."); 
        } catch (error) {
            console.error("❌ Error saving payment:", error); 
        }
    }

    res.status(200).json({ received: true }); 
};

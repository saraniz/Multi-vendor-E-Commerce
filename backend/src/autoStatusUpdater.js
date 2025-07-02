const cron = require('node-cron');
const Order = require('./models/order');

const COURIER_DELAYS = {
  "DHL Express": 2,
  "CityPak Lanka": 4,
  "Domex": 6,
};

cron.schedule('*/3 * * * *', async () => {
  console.log("[AUTO STATUS] Running auto status update...");

  const now = new Date();
  const orders = await Order.find({
    status: { $in: ['Processing', 'delivered'] }
  });

  for (let order of orders) {
    const orderTime = new Date(order.order_date);
    const hoursSinceOrder = (now - orderTime) / (1000 * 60 * 60); // ms to hours
    const daysSinceOrder = hoursSinceOrder / 24;

    console.log(`[AUTO STATUS] Checking order: ${order._id}, status: ${order.status}, order_date: ${order.order_date}`);

    // ✅ Step 1: After 3 minutes, switch to 'delivered'
    if (order.status === 'Processing' && hoursSinceOrder >= (3 / 60)) {
      order.status = 'delivered';
      await order.save();
      console.log(`✅ Updated to delivered: ${order._id}`);
    }

    // ✅ Step 2: After courier delay, switch to 'shipped'
    if (order.status === 'delivered') {
      const maxDays = COURIER_DELAYS[order.courier_service] || 5;
      if (daysSinceOrder >= maxDays) {
        order.status = 'shipped';
        await order.save();
        console.log(`✅ Updated to shipped: ${order._id}`);
      }
    }
  }

  console.log("[AUTO STATUS] Done checking orders.");
});

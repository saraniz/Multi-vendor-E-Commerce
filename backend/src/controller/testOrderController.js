// This is a test route/controller for Prisma order table connectivity
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Test endpoint to create a dummy order
async function testOrderCreate(req, res) {
  try {
    // You must have a user with reg_id=1 in your user table, or set reg_id to null for guest
    const order = await prisma.order.create({
      data: {
        reg_id: 1, // Change to a valid reg_id or null for guest
        total_price: 100,
        courier_service: "DHL",
        status: "pending",
        order_date: new Date(),
        deliver_date: new Date(),
      },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { testOrderCreate };

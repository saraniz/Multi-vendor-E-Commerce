const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller for searching items
const searchItems = async (req, res) => {
  const { searchQuery } = req.body;



  try {
    // Searches in products only (without store)
    const results = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: 'insensitive' } },
          { description: { contains: searchQuery, mode: 'insensitive' } },
          { category: { contains: searchQuery, mode: 'insensitive' } },
          // Commenting out the store search as the store table doesn't exist yet
          // {
          //   store: {
          //     name: { contains: searchQuery, mode: 'insensitive' },
          //   },
          // },
        ],
      },
      // Removed store from include since it's not available
      // include: {
      //   store: true, // Include store details
      // },
    });

    res.json({ results });
  } catch (error) {
    console.error("Error searching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { searchItems };
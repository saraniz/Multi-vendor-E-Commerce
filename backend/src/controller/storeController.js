const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET store by ID with its products
const getStoreById = async (req, res) => {
  // 1. Parse and Validate the store_id
  const store_id = req.params.store_id;

  // Log request parameters to ensure store_id is passed correctly
  console.log("Route Params:", req.params);  // Debug: Check the value and type

  if (!store_id || isNaN(store_id)) {
    console.error("Invalid store_id. req.params:", req.params); // Log error if invalid store_id
    return res.status(400).json({ error: "Invalid store_id. Must be a number." });
  }

  const parsedStoreId = parseInt(store_id, 10);  // Parse it explicitly with base 10
  console.log("Parsed store_id:", parsedStoreId);  // Debug: Check the parsed value

  try {
    // 2. Fetch the store using prisma.store.findUnique
    const store = await prisma.store.findUnique({
      where: {
        store_id: parsedStoreId, // Use the parsed store_id
      },
      include: {
        products: true, // Fetch associated products
      },
    });

    // 3. Handle the case where the store is not found
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }

    // 4. Send the store data in the response
    res.status(200).json(store);
  } catch (error) {
    // 5. Handle errors during the Prisma operation
    console.error("Error fetching store:", error);
    return res.status(500).json({ error: error.message || "Server error" }); // Send the error message
  }
};

// Fetch products by storeId
const getproductsById = async (req, res) => {
  const storeId = parseInt(req.params.store_id);

  try {
    // Query the products from the database using Prisma
    const products = await prisma.product.findMany({
      where: { store_id:storeId },
    });
    console.log("Fetched products form db:", products);// Log the products to ensure they are being fetched

    // Send the products in the response
    res.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = {
  getStoreById, getproductsById
};

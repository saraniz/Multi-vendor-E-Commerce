// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
const prisma = require("../../config/database.js");

const ProductMongo = require('../models/product.js'); // Import your Mongo product model
const mongoose = require('mongoose'); // Uncomment if you need to connect to MongoDB
const StoreMongo = require('../models/store.js'); 

// Controller for searching items
const searchItems = async (req, res) => {
  const { searchQuery } = req.body;

  console.log("Received search query:", searchQuery); // Debugging line

  if (!searchQuery) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const results = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
          { category: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
    });

    res.json({ results });
  } catch (error) {
    console.error("Error searching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch item details by product_id
const getProductDetails = async (req, res) => {
  const { product_id } = req.params;

  if (!product_id || isNaN(Number(product_id))) {
    return res.status(400).json({ message: "Invalid product Id" });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { product_id: Number(product_id) },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fetch all products in the database
const getAllProducts = async (req, res) => {
  console.log("Fetching all products...");

  try {
    const products = await prisma.product.findMany();

    if (!products.length) {
      return res.status(404).json({ message: "No Products Found" });
    }

    res.json(products); // includes product_image field
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Add a new product (with optional base64 image)
const addProduct = async (req, res) => {
  const userId = req.user.reg_id; // Extract reg_id from JWT

  const {
    name,
    description,
    price,
    stock,
    category,
    productImage, // base64 string or URL from frontend
  } = req.body;

  let { isPremium } = req.body;
  isPremium = isPremium === "true" || isPremium === true;

  if (!name || !description || !price || !stock || !category) {
    return res.status(400).json({ error: "All product fields are required." });
  }

  try {
    // 1. Check user exists and is a seller
    const user = await prisma.user.findUnique({ where: { reg_id: userId } });
    if (!user) return res.status(404).json({ message: "User not found." });
    if (!user.isSeller) return res.status(403).json({ message: "You are not a seller." });

    // 2. Get seller and store info
    const seller = await prisma.seller.findUnique({
      where: { reg_id: userId },
      include: { store: true },
    });
    if (!seller || !seller.store) return res.status(404).json({ message: "Seller or store not found." });

    const { store_id, store_name, store_image } = seller.store;

    // 3. Create product in Prisma (PostgreSQL)
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        category,
        isPremium,
        product_image: productImage || null,
        store_id,
        store_name,
        store_image,
      },
    });

    console.log("Product created in Prisma:", product);

    // Use the correct unique identifier for prisma_id
    const prismaProductId = product.product_id || product.id;
    if (!prismaProductId) {
      return res.status(500).json({ message: "Failed to create product in Prisma (missing product_id or id)" });
    }

    // 4. Find corresponding store in MongoDB by store email or other unique field
    const storeMongo = await StoreMongo.findOne({ business_email: seller.store.business_email });

    // 5. Create product in MongoDB, linking with prisma_id
    const productMongo = new ProductMongo({
      prisma_id: prismaProductId,          // <-- link Prisma product ID here
      name,
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
      category,
      isPremium,
      product_image: productImage || '',
      store_id: storeMongo ? storeMongo._id : null,
      store_name,
      store_image,
    });

    await productMongo.save();

    console.log("Product created in MongoDB:", productMongo);

    res.status(201).json({
      message: "Product added successfully in both databases",
      product,
    });

  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const prismaId = parseInt(req.params.prisma_id);
    console.log('[updateProduct] Prisma ID:', prismaId);

    if (isNaN(prismaId)) {
      console.log('[updateProduct] Invalid prisma_id');
      return res.status(400).json({ success: false, message: 'Invalid prisma_id' });
    }

    // Log incoming form data
    console.log('[updateProduct] Incoming data from frontend:', req.body);
    if (req.file) {
      console.log('[updateProduct] Received file:', req.file.filename);
    } else {
      console.log('[updateProduct] No image file uploaded');
    }

    const { name, price, stock, description, category } = req.body;

    // Find product in MongoDB
    const productMongo = await ProductMongo.findOne({ prisma_id: prismaId });
    console.log('[updateProduct] MongoDB product found:', productMongo);

    if (!productMongo) {
      console.log('[updateProduct] MongoDB product not found');
      return res.status(404).json({ success: false, message: 'MongoDB product not found' });
    }

    // Find product in Prisma (PostgreSQL)
    const productPrisma = await prisma.product.findUnique({
      where: { product_id: prismaId }
    });
    console.log('[updateProduct] Prisma product found:', productPrisma);

    if (!productPrisma) {
      console.log('[updateProduct] Prisma product not found');
      return res.status(404).json({ success: false, message: 'Prisma product not found' });
    }

    // Handle image upload
    if (req.file) {
      const imagePath = `/uploads/products/${req.file.filename}`;
      console.log('[updateProduct] Updating image to:', imagePath);
      productMongo.product_image = imagePath;

      // Update Prisma product_image immediately
      await prisma.product.update({
        where: { product_id: prismaId },
        data: { product_image: imagePath }
      });

      console.log('[updateProduct] Prisma product image updated');
    }

    // Update MongoDB product fields
    productMongo.name = name ?? productMongo.name;
    productMongo.price = price ?? productMongo.price;
    productMongo.stock = stock ?? productMongo.stock;
    productMongo.description = description ?? productMongo.description;
    productMongo.category = category ?? productMongo.category;

    await productMongo.save();
    console.log('[updateProduct] MongoDB product updated:', productMongo);

    // Update Prisma product fields (excluding product_image already updated)
    const updatedPrismaProduct = await prisma.product.update({
      where: { product_id: prismaId },
      data: {
        name: name ?? productPrisma.name,
        price: price ? parseFloat(price) : productPrisma.price,
        stock: stock ? parseInt(stock) : productPrisma.stock,
        description: description ?? productPrisma.description,
        category: category ?? productPrisma.category
      }
    });
    console.log('[updateProduct] Prisma product updated:', updatedPrismaProduct);

    return res.json({ success: true, message: 'Product updated successfully' });
  } catch (error) {
    console.error('[updateProduct] Error:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  searchItems,
  getProductDetails,
  getAllProducts,
  addProduct,
  updateProduct,
};

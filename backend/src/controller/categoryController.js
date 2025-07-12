const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();




const getProductsByCategory = async (req, res, category) => {
  try {
    const products = await prisma.product.findMany({
      where: { category: category },
      select: {
        product_id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        category: true,
        product_image: true,
        store_name: true,
        store_image: true
      }
    });

    res.status(200).json({ category, count: products.length, products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getFrockProducts = async (req, res) => {
  await getProductsByCategory(req, res, "Frock");
};


const getTshirtProducts = async (req, res) => {
  await getProductsByCategory(req, res, "T-Shirt");
};


const getJeansProducts = async (req, res) => {
  await getProductsByCategory(req, res, "Jeans");
};


const getSkirtProducts = async (req, res) => {
  await getProductsByCategory(req, res, "Skirt");
};


// premium products
const getPremiumProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { isPremium: true },
      select: {
        product_id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        category: true,
        product_image: true,
        store_name: true,
        store_image: true,
        isPremium: true
      }
    });

    res.status(200).json({
      status: 'success',
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {getFrockProducts, getTshirtProducts, getJeansProducts, getSkirtProducts, getPremiumProducts};
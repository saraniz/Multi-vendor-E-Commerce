const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Submit reviews
const submitReview = async (req, res) => {
  const { content, userName, product_id } = req.body;

  console.log("Request Body:", req.body); // Debugging

  if (!content || !userName || !product_id) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (isNaN(product_id)) {
    return res.status(400).json({ message: "Invalid product ID." });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { product_id: parseInt(product_id) },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    const review = await prisma.review.create({
      data: {
        content,
        userName,
        product_id: parseInt(product_id),
      },
    });

    res.status(201).json({ message: "Review submitted successfully", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while submitting the review." });
  }
};

// Get reviews for a product
// Get reviews for a product
const getReviews = async (req, res) => {
    const product_id = parseInt(req.params.product_id);
  
    if (isNaN(product_id)) {
      return res.status(400).json({ message: "Invalid product ID." });
    }
  
    try {
      // Check if the product exists
      const product = await prisma.product.findUnique({
        where: { product_id },
      });
  
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
  
      // Fetch reviews for the product
      const reviews = await prisma.review.findMany({
        where: { product_id },
        // orderBy: { createdAt: "desc" }, // Sort by latest reviews
      });
  
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error); // Log the error
      res.status(500).json({ message: "An error occurred while fetching reviews." });
    }
  };

module.exports = { submitReview, getReviews };
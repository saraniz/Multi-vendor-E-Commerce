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

//fetch item details by id
const getProductDetails = async (req,res) =>{
  const {product_id} = req.params
  console.log(product_id)

  //validate product_id
  if(!product_id || isNaN(Number(product_id))){
    return res.status(400).json({message:"Invalid product Id"})
  }

  try{
    const product = await prisma.product.findUnique({
      where: {product_id: Number(product_id)},
    })

    if(!product){
      return res.status(404).json({message: "Product not found"})
    }

    res.json(product)
  }catch(error){
    console.error("Error fetching product:",error)
    res.status(500).json({message: "Internal Server Error"})
  }
}

//fetch all the products in database
const getAllProducts = async (req, res) => {
  console.log("Fetching all products...");
  
  try {
    const products = await prisma.product.findMany();

    if (!products.length) {
      return res.status(404).json({ message: "No Products Found" });
    }

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = { searchItems,getProductDetails,getAllProducts };
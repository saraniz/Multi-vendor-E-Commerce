const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Controller for searching items
const searchItems = async (req, res) => {
  const { searchQuery } = req.body;

  try {
    // Searches in products only (without store)
    const results = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
          { category: { contains: searchQuery, mode: "insensitive" } },
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
const getProductDetails = async (req, res) => {
  const { product_id } = req.params;
  console.log(product_id);

  //validate product_id
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

//add items
// const addProduct = async (req, res) => {
//   try {
//     // Extract seller id from JWT
//     const userId = req.user.reg_id;

//     const { name, description, price, stock, category,productImages} = req.body;
//     let { isPremium } = req.body;

//     // Convert isPremium to boolean (if user clicks premium button, it's "true")
//     isPremium = isPremium === "true";

//     // Validate input fields
//     if (!name || !description || !price || !stock || !category) {
//       return res.status(400).json({ error: "All product fields are required." });
//     }

//     // Fetch user and seller details using userId
//     const user = await prisma.user.findUnique({
//       where: { reg_id: userId },
//       select: {
//         reg_id: true,
//         isSeller: true,  // Select the 'isSeller' column
//         seller: {        // Include seller details
//           select: {
//             seller_id: true,
//             store: {      // Include store details for seller
//               select: {
//                 store_id: true,
//                 store_name: true,
//                 // store_image: true
//               }
//             }
//           }
//         }
//       }
//     });

//     if (!user || !user.isSeller) {
//       return res.status(400).json({ error: "User is not a seller." });
//     }

//     // Fetch store details using seller_id
//     const store = user.seller?.store; // Get the store related to the seller_id

//     if (!store) {
//       return res.status(400).json({ error: "Store not found for this seller" });
//     }

//     // Image handling commented out for now
//     // const productImages = req.files ? req.files.map(file => file.buffer.toString("base64")) : [];

//     // Insert new product into the database
//     const newProduct = await prisma.product.create({
//       data: {
//         name,
//         description,
//         price: parseFloat(price),
//         stock: parseInt(stock),
//         category,
//         isPremium,
//         store_id: store.store_id,
//         store_name: store.store_name,
//         store_image: null,
//         product_image: productImages.length ? JSON.stringify(productImages) : null // Handle image data
//       }
//     });

//     res.status(201).json({
//       message: "Product added successfully",
//       product: newProduct
//     });

//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// };

// Add items

const addProduct = async (req, res) => {
  const userId = req.user.reg_id; // Extract the reg_id from JWT token
  const { name, description, price, stock, category, productImages } = req.body;
  let { isPremium } = req.body;

  // Convert isPremium to boolean (if user clicks premium button, it's "true")
  isPremium = isPremium === "true";

  // Validate input fields
  if (
    !name ||
    !description ||
    !price ||
    !stock ||
    !category 
  ) {
    return res.status(400).json({ error: "All product fields are required." });
  }

  try {
    //check user exsits and seller
    const user = await prisma.user.findUnique({
      where: { reg_id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!user.isSeller) {
      return res.status(403).json({ message: "You are not a seller" });
    }

    //get seller details using reg_id
    const seller = await prisma.seller.findUnique({
      where: { reg_id: userId },
      include: {
        store: true, //include store detials
      },
    });

    if (!seller) {
      return res.status(404).json({ message: "Seller not found." });
    }

    //extract store details from the seller and store tables
    const { store_id, store_name, store_image } = seller.store;

    // Allow product_image to be null
    const productImage = productImages || null;

    // Create the product
    const product = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        stock: stock,
        category: category,
        isPremium: isPremium,
        product_image: productImage,
        // store: {
        //   connect: { store_id: store_id }, // Properly link product to store
        // },
        store_id: store_id,
        store_name: store_name,
        store_image: store_image, // Assuming store_image is stored in the store model
      },
    });
    return res
      .status(201)
      .json({ message: "Product added successfully", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { searchItems, getProductDetails, getAllProducts, addProduct };

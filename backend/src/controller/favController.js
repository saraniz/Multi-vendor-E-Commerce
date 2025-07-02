//handle favorite products

// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()
const prisma = require("../../config/database.js");


//add a product to favorites
const addFavorite = async(req,res) =>{
    const {reg_id,product_id} = req.body
    console.log("fav ",reg_id,product_id)

    try{
        const favorite = await prisma.favorite.create({
            data:{
                reg_id: parseInt(reg_id),
                product_id: parseInt(product_id),
            },
        })
        res.status(201).json(favorite)
    } catch(error){
        res.status(400).json({error:'Product already in favorites or invalid data'})
    }

}

//remove a product from favorites
const removeFavorite = async (req, res) => {
    const { reg_id, product_id } = req.body;

    try {
        // Delete the favorite item where reg_id and product_id match
        const deletedFavorite = await prisma.favorite.deleteMany({
            where: {
                reg_id: parseInt(reg_id),
                product_id: parseInt(product_id),
            },
        });

        // If no items were deleted, return error
        if (deletedFavorite.count === 0) {
            return res.status(404).json({ message: "Product not found in favorites" });
        }

        res.json({ message: "Product removed from favorites successfully." });
    } catch (error) {
        console.error("Error removing product from favorites:", error);
        res.status(500).json({ message: "Server error" });
    }
};


//fetch all the favorite products for a user
const getUserFavorites = async (req, res) => {
    const { reg_id } = req.params;

    try {
        console.log("fav id:", reg_id);

        // Validate reg_id
        if (!reg_id) {
            return res.status(400).json({ error: "User ID (reg_id) is required" });
        }

        const userId = parseInt(reg_id, 10);
        if (isNaN(userId)) {
            return res.status(400).json({ error: "Invalid User ID format" });
        }

        // Fetch favorite products for the user
        const favorites = await prisma.favorite.findMany({
            where: { reg_id: userId },
            include: { product: true },
        });

        console.log("Favorites:", favorites);

        // Format the favorite items
        const formattedFavItems = favorites
            .filter(item => item.product) // Ensure product exists
            .map(item => ({
                product_id: item.product.product_id,
                name: item.product.name,
                price: item.product.price,
                product_image: item.product.product_image,
                description: item.product.description,
                store_image: item.product.store_image,
                store_name: item.product.store_name,
            }));

        res.status(200).json(formattedFavItems);
    } catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};


module.exports = {addFavorite,removeFavorite,getUserFavorites}
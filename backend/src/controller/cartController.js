const { PrismaClient } = require('@prisma/client'); // Import Prisma client
const prisma = new PrismaClient(); // Instantiate Prisma client

// Add product to cart
const addItemToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.reg_id; // Extracted from JWT token

        // Validate input
        if (!productId || !quantity) {
            return res.status(400).json({ error: "Missing required fields: productId, quantity." });
        }

        // Ensure productId is an integer
        const productIdInt = parseInt(productId, 10);
        if (isNaN(productIdInt)) {
            return res.status(400).json({ error: "Invalid productId. Expected a number." });
        }

        // Fetch product details from the product table
        const product = await prisma.product.findUnique({
            where: {
                product_id: productIdInt, // Use productIdInt
            },
        });

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Create a cart item and store product details
        const cartItem = await prisma.cart.create({
            data: {
                reg_id: userId, // Use userId (reg_id from JWT token)
                product_id: productIdInt, // Use productIdInt
                quantity: quantity,
                price: product.price.toString(),
                description: product.description,
                product_image: product.product_image,
            },
        });

        res.status(201).json({ message: 'Item added to cart', cartItem });
    } catch (error) {
        console.error("Error in addItemToCart:", error); // Debugging: Log the error
        res.status(500).json({ error: error.message });
    }
};

// Update cart item
const updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;

        // Validate input
        if (!quantity) {
            return res.status(400).json({ error: "Missing required field: quantity." });
        }

        // Ensure cart item ID is an integer
        const cartItemId = parseInt(req.params.id, 10);
        if (isNaN(cartItemId)) {
            return res.status(400).json({ error: "Invalid cart item ID. Expected a number." });
        }

        // Find the cart item
        const cartItem = await prisma.cart.findUnique({
            where: {
                id: cartItemId,
            },
        });

        // Check if the cart item exists and belongs to the user
        if (!cartItem || cartItem.reg_id !== req.user.reg_id) {
            return res.status(404).json({ message: 'Cart item not found.' });
        }

        // Update the cart item
        const updatedCartItem = await prisma.cart.update({
            where: {
                id: cartItemId,
            },
            data: {
                quantity,
            },
        });

        res.status(200).json({ message: 'Cart item updated successfully.', cartItem: updatedCartItem });
    } catch (error) {
        console.error("Error in updateCartItem:", error); // Debugging: Log the error
        res.status(500).json({ error: error.message });
    }
};

// // Delete cart item
// const deleteCartItem = async (req, res) => {
//     try {
//         // Ensure cart item ID is an integer
//         const cartItemId = parseInt(req.params.id, 10);
//         if (isNaN(cartItemId)) {
//             return res.status(400).json({ error: "Invalid cart item ID. Expected a number." });
//         }

//         // Find the cart item
//         const cartItem = await prisma.cart.findUnique({
//             where: {
//                 id: cartItemId,
//             },
//         });

//         // Check if the cart item exists and belongs to the user
//         if (!cartItem || cartItem.reg_id !== req.user.reg_id) {
//             return res.status(404).json({ message: 'Cart item not found.' });
//         }

//         // Delete the cart item
//         await prisma.cart.delete({
//             where: {
//                 id: cartItemId,
//             },
//         });

//         res.status(200).json({ message: 'Cart item deleted successfully' });
//     } catch (error) {
//         console.error("Error in deleteCartItem:", error); // Debugging: Log the error
//         res.status(500).json({ error: error.message });
//     }
// };
// ;


//Remove product from cart
const removeFromCart = async (req,res) =>{
    
const { cart_id,product_id } = req.body;

  
    try{
        //delete the cart item where userId and productId match
        const deletedCartItem = await prisma.cart.delete({
            where: { cart_id:cart_id,product_id:product_id },
        })
        

        //if no items were deleted return error
        if(deletedCartItem.count === 0){
            return res.status(404).json({message:"Item not found in the cart"})
        }

        res.json({message:"Item removed successfully."})
    } catch(error){
        console.error("Error removing item from cart:",error)
        res.status(500).json({message:"Server error"})
    }
} 




//view cart items
const viewCart = async (req,res) =>{
    try{
        const cartItems = await prisma.cart.findMany({
            where:{reg_id:req.user.reg_id},
            include:{
                product:{
                    select:{
                        product_id:true,
                        name:true,
                        price:true,
                        product_image:true,
                        description:true,
                    }
                }
            }
        })

        //format the cart items
        const formattedCartItems = cartItems.map(item =>({
            id:item.cart_id,
            productId:item.product.product_id,
            name:item.product.name,
            price:item.product.price,
            image:item.product.product_image,
            description:item.product.description,
            quantity:item.quantity
        }))

        res.status(200).json({ cartItems: formattedCartItems });

    }catch (error){
        console.error("Error in viewcart:",error)
        res.status(500).json({error:"Failed to fetch cart items"})
    }
} 


module.exports = { addItemToCart, updateCartItem,removeFromCart, viewCart };
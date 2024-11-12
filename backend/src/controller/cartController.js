const { where } = require('sequelize')
const Cart = require('../models/Cart')    //import cart model
const product = require('../models/product')

//add product to cart
const addItemToCart = async (req,res) => {
    try{
        const {productId, quantity} = req.body
        const cartItem = await Cart.create({
            userId: req.user.id,
            productId,
            quantity
        })
        res.status(201).json({message: 'Item added to cart', cartItem})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


//update cart item
const updateCartItem = async (req,res) =>{
    try{
        const {quantity} = req.body //new quantity from the request
        const cartItem = await Cart.findOne({where:{id: req.params.id}, userId: req.user.id})
        
        if(!cartItem){
            return res.status(404).json({message: 'Cart item not found.'})
        }

        await cartItem.update({quantity})
        res.status(200).json({message: 'Cart item updated successfully.', cartItem})

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//delete cart item
const deleteCartItem = async (req,res) => {
    try{
        const cartItem = await Cart.findOne({where: {id: req.params.id, userId: req.user.id}})

            if(!cartItem){
                return res.status(404).json({message:'Cart item not found'})
            }

            await cartItem.destroy()
            res.status(200).json({message:'Cart item deleted successfully'})
        } catch(error){
            res.status(500).json({error:error.message})
        }
    }

//view cart items

const viewCart = async (req, res) => {
    try {
        const cartItems = await Cart.findAll({
            where: { userId: req.user.id },
            include: [{ model: Product, attributes: ['name', 'price'] }] // Include product details
        });

        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { updateCartItem, deleteCartItem, viewCart };
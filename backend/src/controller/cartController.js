const { PrismaClient } = require('@prisma/client'); // Import Prisma client
const prisma = new PrismaClient(); // Instantiate Prisma client

// Add product to cart
const addItemToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const cartItem = await prisma.cart.create({
            data: {
                userId: req.user.id,
                productId,
                quantity,
            },
        });

        res.status(201).json({ message: 'Item added to cart', cartItem });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update cart item
const updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body; // New quantity from the request

        const cartItem = await prisma.cart.findUnique({
            where: {
                id_userId: {
                    id: req.params.id,
                    userId: req.user.id,
                },
            },
        });

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found.' });
        }

        const updatedCartItem = await prisma.cart.update({
            where: {
                id_userId: {
                    id: req.params.id,
                    userId: req.user.id,
                },
            },
            data: {
                quantity,
            },
        });

        res.status(200).json({ message: 'Cart item updated successfully.', cartItem: updatedCartItem });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete cart item
const deleteCartItem = async (req, res) => {
    try {
        const cartItem = await prisma.cart.findUnique({
            where: {
                id_userId: {
                    id: req.params.id,
                    userId: req.user.id,
                },
            },
        });

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found.' });
        }

        await prisma.cart.delete({
            where: {
                id_userId: {
                    id: req.params.id,
                    userId: req.user.id,
                },
            },
        });

        res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// View cart items
const viewCart = async (req, res) => {
    try {
        const cartItems = await prisma.cart.findMany({
            where: { userId: req.user.id },
            include: {
                product: {
                    select: {
                        name: true,
                        price: true,
                    },
                },
            },
        });

        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addItemToCart, updateCartItem, deleteCartItem, viewCart };

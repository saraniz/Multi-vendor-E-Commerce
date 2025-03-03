const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

// admin login
const admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await prisma.user.findUnique({
            where: { email }, 
        })
        

        if (admin) {
            const match = await bcrypt.compare(password, admin.password);
            if (match) {
                const token = jwt.sign(
                    { admin_id: admin.admin_id, email: admin.email, role: admin.role }, 
                    'your-secret-key', // Replace with your secret key
                    { expiresIn: '1h' }
                );
                return res.status(200).json({ message: 'Admin Login successful', jwt: token });
            } else {
                return res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            return res.status(401).json({ message: 'Admin email not found' });
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: error.message });
    }
};

// admin logout
const admin_logout = async (req, res) => {
    try {
        // Clear the token on the client side (No need to handle it on the server)
        res.status(200).json({ message: 'Admin logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging out', error: error.message });
    }
};

// Admin dashboard data
const getAdminDashboardData = async (req, res) => {
  try {
    // Fetch counts for basic analytics 
    const totalProducts = await prisma.product.count(); 
    //const totalCarts = await prisma.cart.count(); 

    // Calculate total revenue (sum of cart prices)
    // const totalRevenue = await prisma.cart.aggregate({
    //     _sum: { price: true }
    //   });


    res.json({
        message: "Admin Dashboard Data",
        data: {
            totalProducts
            //totalCarts
            //totalRevenue: totalRevenue._sum.price || 0
        }
    });
    
} catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data", error: error.message });
} finally {
    await prisma.$disconnect();  
  }
}

// Block Store 
const getBlockStore = async (req, res) => {
    try{
        const {store_id} = req.params;
        
        // check if the store is exists
        const store = await prisma.store.findUnique({
            where: { store_id: parseInt(store_id) },
        });

        if (!store) {
            return res.status(404).json({ message: "Store not found" });
        }

        await prisma.store.update({
            where: { store_id: parseInt(store_id) },
            data: { status: "blocked" },
        });

        return res.json({ message: "Store has been blocked successfully" });
    } catch(error){
        res.status(500).json({ message: "Error blocking store", error: error.message });
    } finally {
        await prisma.$disconnect();  
      }
}

module.exports = {admin_login , admin_logout , getAdminDashboardData , getBlockStore};
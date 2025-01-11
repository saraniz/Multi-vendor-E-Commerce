const { PrismaClient } = require('@prisma/client'); // Import Prisma client
const prisma = new PrismaClient(); // Instantiate Prisma client
const adminModel = require('../models/adminModel');
const userModel = require('../models/users');
const productModel = require('../models/product');
const cartModel = require('../models/Cart');

const getAdminDashboard = async (req, res) => {
    const { id } = req;

    responseReturn = (res,code,data) => {
        return res.status(code).json(data);
    }

    try {
        
        // Count total products
        const totalProduct = await prisma.Product.count();
        
        // 🔴 taama orders part eka hadala na
        // Count total orders   
        //const totalOrder = await prisma.customerOrder.count();
  
        // 🔴 Seller Model ekath taama na 
        // Count total sellers
        //const totalSeller = await prisma.seller.count();
  
        

        // Return response
        responseReturn(res, 200, {
          totalProduct,
          //totalOrder,
          //totalSeller,
        });
      } catch (error) {
        console.error(error.message);
        responseReturn(res, 500, { error: 'Internal server error' });
      }
}


module.exports = {getAdminDashboard}
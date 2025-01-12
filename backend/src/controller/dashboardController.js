const { PrismaClient } = require('@prisma/client'); // Import Prisma client
const prisma = new PrismaClient(); // Instantiate Prisma client
const adminModel = require('../models/adminModel');
const userModel = require('../models/users');
const productModel = require('../models/product');
const cartModel = require('../models/Cart');


responseReturn = (res,code,data) => {
  return res.status(code).json(data);
}

const getAdminDashboard = async (req, res) => {
    const { id } = req;

    

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


const getSellerDashboard = async (req, res) => {
    const { id } = req;

  //   responseReturn = (res,code,data) => {
  //     return res.status(code).json(data);
  // }

  // Seller Model isnot available 🔴

}


const getCustomerDashboard = async (req, res) => {
  const { id } = req;

  try{
    const totalOrders = await prisma.order.count({
      where: {
          userId: id,
      },
  });

  // Count pending orders for the customer
  const pendingOrders = await prisma.order.count({
      where: {
          userId: id,
          status: 'Pending',
      },
  });

  const totalSpentResult = await prisma.order.aggregate({
    _sum: {
        totalPrice: true,
    },
    where: {
        userId: id,
    },
});
  const totalSpent = totalSpentResult._sum.totalPrice || 0;



  res.status(200).json({
    totalOrders,
    pendingOrders,
    totalSpent,

});


  } catch (error) {
    console.error(error.message);
    responseReturn(res, 500, { error: 'Internal server error' });
  }
}

module.exports = {getAdminDashboard, getSellerDashboard, getCustomerDashboard}
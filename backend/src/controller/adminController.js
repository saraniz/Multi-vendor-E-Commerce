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
//const getAdminDashboardData = async (req, res) => {
  //try {
    // Fetch counts for basic analytics 
   // const totalProducts = await prisma.product.count(); 
    //const totalCarts = await prisma.cart.count(); 

    // Calculate total revenue (sum of cart prices)
    // const totalRevenue = await prisma.cart.aggregate({
    //     _sum: { price: true }
    //   });


//     res.json({
//         message: "Admin Dashboard Data",
//         data: {
//             totalProducts,
//             //totalCarts,
//             //totalRevenue: totalRevenue._sum.price ?? 0
//         }
//     });
    
// } catch (error) {
//     res.status(500).json({ message: "Error fetching dashboard data", error: error.message });
//  } 
// }


const getProdctData = async (req, res) => {
    try {
      // Fetch total product count
      const totalProducts = await prisma.product.count();
  
      res.json({
        message: "Admin Dashboard Data",
        data: {
          totalProducts
        }
      });
  
    } catch (error) {
      res.status(500).json({ message: "Error fetching dashboard data", error: error.message });
    } finally {
        await prisma.$disconnect(); 
      }
  };

  const getSellerData = async (req, res) => {
    try {
      // Fetch total seller count
      const totalSellers = await prisma.seller.count();
  
      res.json({
        message: "Admin Dashboard Data",
        data: {
          totalSellers
        }
      });
  
    } catch (error) {
      res.status(500).json({ message: "Error fetching seller dashboard data", error: error.message });
    } finally {
      await prisma.$disconnect(); // Close Prisma connection
    }
  };

// Send Warnings to sellers😒😒😒😒😒
// const sellerWarnings = {};

// const warningList = {
//   1: "Warning 1 😡",
//   2: "Warning 2 😡😡",
//   3: "Warning 3 😡😡😡"
// };

// const sendWarning = async (req, res) => {
//   const { seller_id, type } = req.body;

//   if (!seller_id || !type || !warningList[type]) {
//     return res.status(400).json({ message: "Valid seller_id and warning type (1 or 2 or 3) are required" });
//   }

//   // Check if the seller exists in the database
//   const seller = await prisma.seller.findUnique({
//     where: { seller_id: parseInt(seller_id) },
//   });

//   if (!seller) {
//     return res.status(404).json({ message: "Seller not found" });
//   }

//   // Replace previous warning
//   sellerWarnings[seller_id] = warningList[type];

//   return res.status(200).json({ message: `Warning sent: ${warningList[type]}` });
// };

// Get current warning for a seller
// const getWarnings = async (req, res) => {
//   const { seller_id } = req.params;

//   if (!seller_id) {
//     return res.status(400).json({ message: "seller_id is required" });
//   }

//   const warning = sellerWarnings[seller_id] || null;
//   return res.status(200).json({ warning });
// };
//😒😒😒😒😒

// Define warnings
const warningList = {
  1: "Warning 1 😡",
  2: "Warning 2 😡😡",
  3: "Warning 3 😡😡😡"
};

// Send Warning 1
const sendWarning1 = async (req, res) => {
  const { seller_id } = req.body;
  if (!seller_id) {
    return res.status(400).json({ message: "seller_id is required" });
  }

  const seller = await prisma.seller.findUnique({
    where: { seller_id: parseInt(seller_id) },
  });

  if (!seller) {
    return res.status(404).json({ message: "Seller not found" });
  }

  await prisma.seller.update({
    where: { seller_id: parseInt(seller_id) },
    data: { warning1: warningList[1] },
  });

  return res.status(200).json({ message: warningList[1] });
};

// Send Warning 2
const sendWarning2 = async (req, res) => {
  const { seller_id } = req.body;
  if (!seller_id) {
    return res.status(400).json({ message: "seller_id is required" });
  }

  const seller = await prisma.seller.findUnique({
    where: { seller_id: parseInt(seller_id) },
  });

  if (!seller) {
    return res.status(404).json({ message: "Seller not found" });
  }

  await prisma.seller.update({
    where: { seller_id: parseInt(seller_id) },
    data: { warning2: warningList[2] },
  });

  return res.status(200).json({ message: warningList[2] });
};

// Send Warning 3
const sendWarning3 = async (req, res) => {
  const { seller_id } = req.body;
  if (!seller_id) {
    return res.status(400).json({ message: "seller_id is required" });
  }

  const seller = await prisma.seller.findUnique({
    where: { seller_id: parseInt(seller_id) },
  });

  if (!seller) {
    return res.status(404).json({ message: "Seller not found" });
  }

  await prisma.seller.update({
    where: { seller_id: parseInt(seller_id) },
    data: { warning3: warningList[3] },
  });

  return res.status(200).json({ message: warningList[3] });
};

//count customers and sellers 
const getUserCounts = async (req, res) => {
  try {
      // Count total customers
      const totalCustomers = await prisma.user.count({
          where: { role: "Customer" }
      });

      // Count total sellers
      const totalSellers = await prisma.user.count({
          where: { role: "Seller" }
      });

      res.json({
          message: "Admin Dashboard Data",
          data: {
              totalCustomers,
              totalSellers
          }
      });

  } catch (error) {
      res.status(500).json({ message: "Error fetching user counts", error: error.message });
  } finally {
      await prisma.$disconnect(); // Close Prisma connection
  }
};

  

// Block Seller
const blockSeller = async (req, res) => {
  try {
      const { seller_id } = req.params;

      // Check if the seller exists
      const seller = await prisma.seller.findUnique({
          where: { seller_id: parseInt(seller_id) },
      });

      if (!seller) {
          return res.status(404).json({ message: "Seller not found" });
      }

      // Update the seller's status to "blocked"
      await prisma.seller.update({
          where: { seller_id: parseInt(seller_id) },
          data: { isBlocked: true },
      });

      return res.json({ message: "Seller has been blocked successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error blocking seller", error: error.message });
  } finally {
      await prisma.$disconnect();
  }
};

// Unblock Seller
const unblockSeller = async (req, res) => {
  try {
    const { seller_id } = req.params;

    const seller = await prisma.seller.findUnique({
      where: { seller_id: parseInt(seller_id) },
    });

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    await prisma.seller.update({
      where: { seller_id: parseInt(seller_id) },
      data: { isBlocked: false },
    });

    return res.json({ message: "Seller has been unblocked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error unblocking seller", error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

// customer drtails
const getAllCustomers = async (req, res) => {
  try {
    const customers = await prisma.user.findMany({
      where: {
        role: 'Customer',
        
      },
      select: {
        username: true,
        email: true,
        mobileNo: true,
        address: true,
      },
    });

    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// getStoreWithSellerStatus
const getStoreWithSellerStatus = async (req, res) => {
  try {
    const stores = await prisma.store.findMany({
      include: {
        seller: true,
      },
    });

    const result = stores.map((store) => {
      const seller = store.seller;

      let status = "No Warning";
      if (seller?.isBlocked) {
        status = "Blocked";
      } else if (seller?.warning1 && seller?.warning2 && seller?.warning3) {
        status = "3rd Level Warning";
      } else if (seller?.warning1 && seller?.warning2) {
        status = "2nd Level Warning";
      } else if (seller?.warning1) {
        status = "Level 01 Warning";
      }

      return {
        store_id: store.store_id,
        store_name: store.store_name,
        seller_status: status,
      };
    });

    res.json(result);
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
// For admmin dashboard page 👇👇
const getStoreCount = async (req, res) => {
  try {
    const count = await prisma.store.count(); 
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error getting store count:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const countBlockedSellers = async (req, res) => {
  try {
    const count = await prisma.seller.count({
      where: { isBlocked: true }
    });
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting blocked sellers:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const countWarning1 = async (req, res) => {
  try {
    const count = await prisma.seller.count({
      where: { warning1: { not: null } }
    });
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting warning1 sellers:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const countWarning2 = async (req, res) => {
  try {
    const count = await prisma.seller.count({
      where: { warning2: { not: null } }
    });
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting warning2 sellers:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const countWarning3 = async (req, res) => {
  try {
    const count = await prisma.seller.count({
      where: { warning3: { not: null } }
    });
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting warning3 sellers:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDashboardData = async (req, res) => {
  try {
    // Execute all database queries in parallel for better performance
    const [totalShops, blockedShops, warning1Count, warning2Count, warning3Count] = await Promise.all([
      // Total number of stores
      prisma.store.count(),
      
      // Number of blocked sellers
      prisma.seller.count({
        where: { isBlocked: true }
      }),
      
      // Warning counts for each step
      prisma.seller.count({
        where: { warning1: { not: null } }
      }),
      prisma.seller.count({
        where: { warning2: { not: null } }
      }),
      prisma.seller.count({
        where: { warning3: { not: null } }
      })
    ]);

    // Structure the response to match frontend expectations
    const dashboardData = {
      totalShops,
      blockedShops,
      warnings: {
        step01: warning1Count,
        step02: warning2Count,
        step03: warning3Count
      }
      // Note: Revenue data excluded as requested
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {getDashboardData , admin_login , admin_logout , getProdctData , getSellerData , getUserCounts , blockSeller , unblockSeller , sendWarning1, sendWarning2 , sendWarning3 , getAllCustomers , getStoreWithSellerStatus , getStoreCount, countBlockedSellers, countWarning1, countWarning2, countWarning3};

//module.exports = {admin_login , admin_logout , getProdctData , getSellerData , getUserCounts , blockSeller , unblockSeller , sendWarning1, sendWarning2 , sendWarning3 };
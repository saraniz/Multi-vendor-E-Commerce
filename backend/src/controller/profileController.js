// const prisma = require("@prisma/client") //import prisma client

// /// Controller to fetch user profile
// const getUserProfile = async (req, res) => {
//     try {
//       const user = req.user; // User is already attached by the authenticate middleware
  
//       // Respond with relevant user data
//       res.json({
//         fullName: user.fullName,
//         profilePicture: user.profilePicture,
//         telephone: user.telephone,
//         address: user.address,
//       });
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       res.status(500).json({ message: "Failed to fetch user profile." });
//     }
//   };
  
//   module.exports = { getUserProfile };
  
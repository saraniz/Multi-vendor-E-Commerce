const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const optionalAuthenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, 'your-secret-key'); // replace with env variable
      const user = await prisma.user.findUnique({
        where: {
          reg_id: decoded.reg_id,
        },
      });

      if (user) {
        req.user = user;
      } else {
        console.warn("[optionalAuthenticate] No user found for reg_id:", decoded.reg_id);
        req.user = null;
      }

    } catch (error) {
      console.warn("[optionalAuthenticate] Invalid or expired token:", error.message);
      req.user = null;
    }

  } else {
    req.user = null; // No token provided
  }

  next();
};

module.exports = optionalAuthenticate;

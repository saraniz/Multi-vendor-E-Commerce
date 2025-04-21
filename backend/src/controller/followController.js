const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Follow a store
const followStore = async (req, res) => {
  try {
    const reg_id = req.user.reg_id;
    const { store_id } = req.body;

    if (!store_id) {
      return res.status(400).json({ message: "Store id missing" });
    }

    const store = await prisma.store.findUnique({
      where: { store_id: parseInt(store_id) },
    });

    if (!store) {
      return res.status(404).json({ message: "Store not found." });
    }

    const existingFollow = await prisma.follow.findUnique({
      where: {
        reg_id_store_id: {
          reg_id: reg_id,
          store_id: parseInt(store_id),
        },
      },
    });

    if (existingFollow) {
      return res.status(400).json({ message: "You already follow this store" });
    }

    const follow = await prisma.follow.create({
      data: {
        reg_id: reg_id,
        store_id: parseInt(store_id),
      },
    });

    return res.status(201).json({
      message: "You have successfully followed the store.",
      follow,
    });
  } catch (err) {
    console.error("Error following store:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch followed shops
const fetchFollowedShops = async (req, res) => {
  try {
    const reg_id = req.user.reg_id;

    const followedShops = await prisma.follow.findMany({
      where: {
        reg_id: reg_id,
      },
      include: {
        store: true, // Include store details
      },
    });

    if (followedShops.length === 0) {
      return res.status(404).json({ message: "No followed stores found." });
    }

    return res.status(200).json({
      message: "Followed shops fetched successfully.",
      followedShops,
    });

  } catch (err) {
    console.error("Error fetching followed shops:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  followStore,
  fetchFollowedShops,
};

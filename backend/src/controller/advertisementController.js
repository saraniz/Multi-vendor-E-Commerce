const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('../services/cloudinary');
const fs = require('fs');


const uploadAdvertisement = async (req, res) => {
  try {
    const file = req.file; //  Get uploaded file

    if (!file) {
      return res.status(400).json({ error: 'No image provided' }); // Validate image
    }

    //  Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'Advertisements', // cloudinary folder name
    });

    //  Save URL in DB
    const newAd = await prisma.Advertisement.create({
      data: {
        imageUrl: result.secure_url, //  Cloudinary image URL
      },
    });

    //  Delete local temp file
    fs.unlinkSync(file.path);

    res.status(201).json({
      message: 'Advertisement uploaded successfully 🎉',
      data: newAd,
    });
  } catch (error) {
    console.error('❌ Upload Error:', error);
    res.status(500).json({ error: 'Failed to upload advertisement' });
  }
};

const getAllAdvertisements = async (req, res) => {
  try {
    const ads = await prisma.Advertisement.findMany({
      orderBy: { id: 'desc' }, // Optional: newest first
    });
    res.status(200).json({ ads });
  } catch (error) {
    console.error('❌ Fetch Error:', error);
    res.status(500).json({ error: 'Failed to fetch advertisements' });
  }
};


const deleteAdvertisement = async (req, res) => {
  try {
    const adId = parseInt(req.params.id); //  Get ad ID from URL

    //  Find the ad first
    const ad = await prisma.Advertisement.findUnique({
      where: { id: adId },
    });

    if (!ad) {
      return res.status(404).json({ error: 'Advertisement not found' });
    }

    //  Extract public ID from Cloudinary URL
    const publicId = ad.imageUrl.split('/').pop().split('.')[0]; // removes folder + extension
    const folder = 'Advertisements'; // your Cloudinary folder
    const fullPublicId = `${folder}/${publicId}`;

    //  Delete the ad from Cloudinary
    await cloudinary.uploader.destroy(fullPublicId);

    //  Delete from Prisma DB
    await prisma.Advertisement.delete({
      where: { id: adId },
    });

    res.status(200).json({ message: 'Advertisement deleted successfully 🚮' });
  } catch (error) {
    console.error('❌ Delete Error:', error);
    res.status(500).json({ error: 'Failed to delete advertisement' });
  }
};


module.exports = {
  uploadAdvertisement, getAllAdvertisements, deleteAdvertisement
};
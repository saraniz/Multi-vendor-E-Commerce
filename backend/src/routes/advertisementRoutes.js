const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); //  Save temp files
const { uploadAdvertisement, getAllAdvertisements, deleteAdvertisement } = require('../controller/advertisementController');

// ✨ POST /api/advertisements
router.post('/ad', upload.single('image'), uploadAdvertisement);
router.get('/ad', getAllAdvertisements);
router.delete('/ad/:id', deleteAdvertisement);

module.exports = router;
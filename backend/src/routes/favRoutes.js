const express = require('express')
const router = express.Router()
const {addFavorite,  getUserFavorites, removeFavorite} = require('../controller/favController')
const authenticate = require('../middleware/authMiddleware')


//add product to favorite
router.post('/addfav',addFavorite)

//remove from favorite
router.delete('/removefav',authenticate, removeFavorite);

//get all product from favorites
router.get('/getfav/:reg_id',getUserFavorites)

module.exports = router
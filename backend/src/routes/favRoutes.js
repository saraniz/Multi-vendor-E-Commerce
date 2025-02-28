const express = require('express')
const router = express.Router()
const {addFavorite, removeFavorite, getUserFavorites} = require('../controller/favController')


//add product to favorite
router.post('/addfav',addFavorite)

//remove from favorite
router.delete('removefav',removeFavorite)

//get all product from favorites
router.get('/getfav/:reg_id',getUserFavorites)

module.exports = router
const { where } = require('sequelize')
const Product = require('../models/product')    //import product model

const addProduct = async (req,res) => {
    try{
        const {name,description,price,stock} =  req.body
        const product = await Product.create({
            name,
            description,
            price,
            stock,
            userId: req.user.Id
        })
        res.status(201).json({message: 'Product added successfully', product})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

const updateProduct = async (req,res) => {
    try{
        const product = await Product.findOne({where:{id: req.params.id, userId:req.user.id}})
        if (!product) return res.status(404).json({message: 'Product not found'})

            await product.update(req.body)
            res.status(200).json({message: 'Product updated successfully', product})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

const deleteProduct = async (req,res) =>{
    try{
        const product = await Product.findOne({where: {id: req.params.id,  userId: req.user.id}})
        if(!product) return res.status(404).json({message: 'Product not found'})

            await product.destroy();
            res.status(200).json({message: 'Product deleted successfully'})
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

const getSellerProduct = async (req,res) =>{
    try{
        const products = await Product.findAll({where: {userId: req.user.id}})
        res.status(200).json({products})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {addProduct,updateProduct,deleteProduct,getSellerProduct}
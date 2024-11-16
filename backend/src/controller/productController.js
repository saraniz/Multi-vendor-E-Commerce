const { PrismaClient, PrismaClient, Prisma } = require('@prisma/client')

//initialize prisma client
const PrismaClient = new PrismaClient()


const addProduct = async (req,res) => {
    try{
        const {name,description,price,stock} =  req.body

        const product = await PrismaClient.product.create({
            data:{
                name,
                description,
                price: parseFloat(price),
                stock: parseInt(stock,10),
                userId: req.user.Id
            },     
        })

        res.status(201).json({message: 'Product added successfully', product})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}


const updateProduct = async (req,res) => {
    try{
        const product  = await Prisma.product.findFirst({
            where: {id: parseInt(id,10), userId:req.user.body},
        })

        if (!product) {
            return res.status(404).json({message: 'Product not found'})
        }

        const updateProduct = await Prisma.product.update({
            where: {id:parseInt(id,10)},
            data: req.body,
        })
            res.status(200).json({message: 'Product updated successfully', updateProduct})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}


const deleteProduct = async (req,res) =>{
    try{
        const {id} = req.params

        const product = await Prisma.product.findFirst({
            where: {id: parseInt(id,10), userId: req.user.id},
        })

        if(!product) return res.status(404).json({message: 'Product not found'})

        await Prisma.product.delete({
            where: {id: parseInt(id,10)},
        })
            res.status(200).json({message: 'Product deleted successfully'})
    } catch(error){
        res.status(500).json({error:error.message})
    }
}


const getSellerProduct = async (req,res) =>{
    try{
        const products = await Prisma.product.findMany({
            where: {userId: req.user.id},
        })
        res.status(200).json({products})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {addProduct,updateProduct,deleteProduct,getSellerProduct}
// const { PrismaClient, PrismaClient, Prisma } = require('@prisma/client')
import formidable, { multipart } from './../../node_modules/formidable/src/index';
const cloudinary = require('cloudinary').v2
const formidable = require("formidable")

//initialize prisma client
// const PrismaClient = new PrismaClient()
const prisma = require("../../config/database.js");


// to interact with file system
const fs = require('fs');
// Provides utilities for working with file and directory paths
const path = require('path');
// to file uploading    ⭕ A Node.js module for parsing form data, especially file uploads.
const formidable = require('formidable');


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


// const updateProduct = async (req,res) => {
//     try{
//         const product  = await Prisma.product.findFirst({
//             where: {id: parseInt(id,10), userId:req.user.body},
//         })

//         if (!product) {
//             return res.status(404).json({message: 'Product not found'})
//         }

//         const updateProduct = await Prisma.product.update({
//             where: {id:parseInt(id,10)},
//             data: req.body,
//         })
//             res.status(200).json({message: 'Product updated successfully', updateProduct})
//     } catch(error){
//         res.status(500).json({error: error.message})
//     }
// }


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

// const product_image_upload = async (req,res) =>{
//                                               //👇 ⭕⭕add correct directory  🔴🔴🔴🔴
//     const form = formidable({multiples: true, uploadDir: './uploads', keepExtensions: true});

//     form.parse(req, async (err, fields, files) => {
//         const {oldImage, productId, storeId} = fields;
//         const {newImage} = files;

//         if (err) {
//             return res.status(400).json({ error: err.message });
//         } else {
//             try {
//                 // Define the new file path for the uploaded image
//                                                         // 👇⭕⭕ add correct directory  🔴🔴🔴
//                 const uploadDir = path.join(__dirname, "./uploads"); 
                
//                 const newFilePath = path.join(uploadDir, newImage.originalFilename);
      
//                 // Ensure the upload directory exists
//                 if (!fs.existsSync(uploadDir)) {
//                   fs.mkdirSync(uploadDir, { recursive: true });
//                 }
      
//                 // Move the uploaded file to the target directory
//                 fs.renameSync(newImage.filepath, newFilePath);
      
//                 // Update the product in the database using Prisma
//                                                                                      // Unique key ⭕⭕ check db & change
//                 const product = await prisma.product.findUnique({ where: { id: parseInt(productId) } });
      
//                 if (!product) {
//                   res.status(404).json({ error: "Product not found" });
//                   return;
//                 }
      
//                 const images = product.images || [];
//                 const index = images.findIndex((img) => img === oldImage);
      
//                 if (index === -1) {
//                   res.status(400).json({ error: "Old image not found in product images" });
//                   return;
//                 }
      
//                 images[index] = `/uploads/${newImage.originalFilename}`;
      
//                 const updatedProduct = await prisma.product.update({
//                   //where: { id: parseInt(productId) },
//                   where: {
//                     id: parseInt(productId),
//                     storeId: parseInt(storeId), 
//                   },
//                   data: { images },
//                 });
//                 res.status(200).json({ product: updatedProduct, message: "Product Image Updated Successfully" });
//               } 
//               catch (error) {
//                 res.status(500).json({ error: error.message });
//               }
//             }
        
//     });
// }

// Product Image ADD ⭕
const addProductImg = async (req, res) => {
    const {id} = req;
    const form = formidable({ multiples: true });

    // Configure Cloudinary
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
    });
    // <--- 🔴We need to add image (file-url) field  & (shopName <-- IF you like)
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({ error: 'Form parsing failed' });
        }

        let { name, description, stock, price } = fields;   
        
        // Trim names <------ ex - "  dunith   " --> "dunith"
        name = name.trim();
        description = description.trim();

        // lets upload images to the cloudinary 
        try{
            let imageUrls = [];
            if (files.images) {
                const imageFiles = Array.isArray(files.images) ? files.images : [files.images];
                for (const image of imageFiles) {
                    const result = await cloudinary.uploader.upload(image.filepath, {
                        folder: 'Products'
                    });
                    imageUrls.push(result.secure_url);
                }
            }

            // Insert data into Supabase
            const { data, error } = await supabase
                .from('Products') // Folder in Cloudinary ('Products')
                .insert([
                    {
                        seller_id: id,     //  Find a way to get the seller id (DataBase Side ())
                        name,
                        description,
                        stock: parseInt(stock),
                        price: parseFloat(price),
                        //shop_name: shopName,
                        images: imageUrls
                    }
                ]);

                if (error) {
                    throw error;
                }
    
                res.status(200).json({ message: 'Product Iamge added successfully', data });
        }
        catch(error){
            res.status(500).json({ error: error.message });
        }
        
    })
}

// product Image Update 
const product_image_update = async (req, res) => {
    const form = formidable({ multiples: true });

    // Configure Cloudinary
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
    });

    form.parse(req, async (err, field, files) => {
        const { oldImage, id } = field;
        const { newImage } = files;

        if (err) {
            return responseReturn(res, 400, { error: err.message });
        }




        

    }
)}





module.exports = {addProduct,updateProduct,deleteProduct,getSellerProduct, addProductImg};
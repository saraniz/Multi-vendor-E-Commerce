// const {PrismaClient} = require('@prisma/client')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const prisma = new PrismaClient()

// //controller for searching items
// const searchItems = async (req,res) =>{
//     const {query} = req.query

//     if(!query){
//         return res.status(400).json({message: "Search query is required"})
//     }

//     try{
//         //searchs in products and stores
//         const results = await prisma.product.findMany({
//             where:{
//                 OR:[
//                     {name: {contains:query, mode:'insensitive'}},
//                     {description: {contains:query, mode:'insensitive'}},
//                     {category: {contains: query, mode:'intenstive'}},
//                     {
//                         store:{
//                             name:{contains:query, mode:'intensitive'},
//                         },
//                     },
//                 ],
//             },
//             include:{
//                 store: true,  //include store details
//             },
//         })

//         res.json({results})
//     }catch(error){
//         console.log("Error searching items", error)
//         res.status(500).json({message: "Internal server error"})
//     }
// }

// module.exports = { searchItems }
const e = require('express');
const db = require('../models/index')

const ProductPageImage = db.productPageImage;
const ProductShowPage = db.ProductShowPage;

const updateProducts = async (req,res) => {
    try{
        const {id} = req.params
        const { content_title, content, product_title } = req.body
        let info = {};
        if(content_title !== ""){
            info.content_title = content_title
        }
        if(content !== ""){
            info.content = content;
        }
        if(product_title !== ""){
            info.product_title = product_title;
        }
        const files = req.files;
        files.forEach((item,index) => {
            files[index] = {img: item.filename, productId: id}
        })
        let isProduct = await ProductShowPage.findOne({where:{productId:id}})
        let imageUpload = await ProductPageImage.bulkCreate(files)
        let textUpload;
        if(!isProduct){
            textUpload = await ProductShowPage.create({content_title,content,product_title,productId: id})
        }else{
            textUpload = await ProductShowPage.update(info,{where:{productId: id}})
        }
        res.status(200).send({success:true, message: "Uploaded successfully!" ,imageUpload, textUpload})

    }catch(err){
        res.status(500).send({success:false, message: "Something went wrong in uploading!"})
    }
}

const getProductInfo = async (req,res) => {
    try{
        const {id} = req.params;
        let productDetails = await ProductShowPage.findOne({where:{productId: id}});
        if(productDetails){
            let images = await ProductPageImage.findAll({where:{productId: id}});
            res.send({success:true, productDetails,images})
        }else{
            res.status(200).send({success:false, message:"No product found!"})
        }
    }catch(err){
        res.status(500).send({success:false,message:"Internal server error!"})
    }
}

const deleteProductImage = async (req,res) => {
    try{
        const {id} = req.params;
        let image = await ProductPageImage.findOne({where:{id: id}})
        if(image){
            let deletedImage = await ProductPageImage.destroy({where:{id:id}});
            res.status(200).send({success: true, message: "Deleted successfully!"})
        }else{
            res.status(500).send({success: false, message: 'Image not found!'})
        }
    }catch(err){
        res.status(500).send({success: false , message:"Internal server error!"})
    }
}


module.exports = {updateProducts, getProductInfo, deleteProductImage}
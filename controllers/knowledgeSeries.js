const e = require('express');
const db = require('../models/index')

const knowledgeSereisImages = db.knowledgeSereisImages;
const knowledgeSeries = db.knowledgeSeries;

const updateKnowledgeSeries = async (req,res) => {
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
            files[index] = {img: item.filename}
        })
        let isProduct = await knowledgeSeries.findOne()
        let imageUpload = await knowledgeSereisImages.bulkCreate(files)
        let textUpload;
        if(!isProduct){
            textUpload = await knowledgeSeries.create({content_title,content,product_title})
        }else{
            textUpload = await knowledgeSeries.update(info,{where:{id:1}})
        }
        res.status(200).send({success:true, message: "Uploaded successfully!" ,imageUpload, textUpload})

    }catch(err){
        res.status(500).send({success:false, message: "Something went wrong in uploading!"})
    }
}



const getKnowledgeSeries = async (req,res) => {
    try{
        let productDetails = await knowledgeSeries.findOne();
        if(productDetails){
            let images = await knowledgeSereisImages.findAll();
            res.send({success:true, productDetails,images})
        }else{
            res.status(200).send({success:false, message:"No product found!"})
        }
    }catch(err){
        res.status(500).send({success:false,message:"Internal server error!"})
    }
}

const deleteKnowledgeSeriesImage = async (req,res) => {
    try{
        const {id} = req.params;
        let image = await knowledgeSereisImages.findOne({where:{id: id}})
        if(image){
            let deletedImage = await knowledgeSereisImages.destroy({where:{id:id}});
            res.status(200).send({success: true, message: "Deleted successfully!"})
        }else{
            res.status(500).send({success: false, message: 'Image not found!'})
        }
    }catch(err){
        res.status(500).send({success: false , message:"Internal server error!"})
    }
}


module.exports = {updateKnowledgeSeries, getKnowledgeSeries, deleteKnowledgeSeriesImage}
const db = require('../models/index');

const updateWorkingTime = async (req,res) => {
    try{
        const {id} = req.params;
        let {from,to,isClosed} = req.body;
        if((from && to) || isClosed){
            if(isClosed){
                from = 'closed',
                to = 'closed'
            }
            let updated = await db.WorkingTime.update({from,to},{where:{id}})
            res.status(200).send({success: true, message: "Updated Successfully!"})
        }else{
            res.status(500).send({success: false, message: "Internal Server Error!"})
        }
    }catch(err){
        res.status(500).send({success: false, message: "Internal Server Error!"})
    }
}

const getWorkingTimes = async (req,res) => {
    try{
        let data = await db.WorkingTime.findAll();
        res.status(200).send({success: true, data: data});
        
    }catch(err){
        res.status(500).send({success: false, message: "Internal Server Error!"})
    }
}

module.exports = {updateWorkingTime, getWorkingTimes}
const User = require('../models/user');
exports.createUser=async(req,res)=>{
    try {
        const{firstName,lastName,age,email}=req.body;
        if(!firstName || !lastName || !age || !email){
            return res.status(400).json({
                success:"failed",
                message:"please enter full info"
            });
        }
        const user = await User.create({
            firstName,
            lastName,
            age,
            email
        });
        res.status(200).json({
            success:true,
            message:"user created successfully",
            user
        });

    } catch (error) {
        res.status(400).json({
            msg:error.message
        });
    }
}
exports.getAllUser=async(req,res)=>{
    try {
        const user = await User.find();
        if(!user){
            return res.status(400).json({
                success:"failed",
                message:"No users registered"
            });  
        }
        res.status(200).json({
            success:true,
            user
        });

    } catch (error) {
        res.status(400).json({
            msg:error.message
        });
    }
}
exports.getIdUser=async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(400).json({
                success:"failed",
                message:"No user found"
            });  
        }
        res.status(200).json({
            success:true,
            user
        });

    } catch (error) {
        res.status(400).json({
            msg:error.message
        });
    }
}
exports.deleteUser=async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(400).json({
                success:"failed",
                message:"No user found"
            });  
        }
        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            user
        });

    } catch (error) {
        res.status(400).json({
            msg:error.message
        });
    }
}
exports.updateUser=async(req,res)=>{
    try {
        const newData = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            age:req.body.age            
        };
        const user = await User.findByIdAndUpdate(req.params.id,newData,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        });
        if(!user){
            return res.status(400).json({
                success:"failed",
                message:"No user found that you want to update"
            });  
        }

        res.status(200).json({
            success:true,
            message:"user updated successfully",
            user
        });

    } catch (error) {
        res.status(400).json({
            msg:error.message
        });
    }
}
import { userModel } from "../models/userModel.js";

export const getAllUsers=async(req,res)=>{
    try {
        const users=await userModel.find({})
        return res.status(201).json({
            success:true,
            users:users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

export const deleteAllUsers=async(req,res)=>{
    try {
        const users=await userModel.deleteMany({},{new:true})
        return res.status(201).json({
            success:true,
            users:users
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}
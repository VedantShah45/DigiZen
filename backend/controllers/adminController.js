import { userModel } from "../models/userModel.js";

export const getAllUsers=async(req,res)=>{
    try {
        const users=await userModel.find({})
        return res.status(201).json({
            success:true,
            users:users
        })
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}
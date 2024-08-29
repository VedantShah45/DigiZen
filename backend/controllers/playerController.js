import { PlayerModel } from "../models/cricketModel.js";
import bcrypt from 'bcrypt'

export const createPlayerProfile=async (req,res)=>{
    try {
        const id=req.params.id
        const {description,role}=req.body;
        if( !description || !role )
            return res.status(400).json({
                sucess:false,
                message:"Description and role fields are compulsory"
            })
        const playerProfile=req.body
        playerProfile.user=id
        const player=await PlayerModel.create(playerProfile)
        return res.status(201).json({
            success:true,
            message:"Profile created successfully",
            player:player
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:"Some internal server error occured"
        })
    }
}

export const updatePlayerProfile=async (req,res)=>{
    try {
        const playerProfile=req.body
        const id=req.params.id
        const player=await PlayerModel.findOneAndUpdate({user:id},playerProfile,{new:true})
        return res.status(201).json({
            success:true,
            message:"Profile created successfully",
            player:player
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:"Some internal server error occured"
        })
    }
}



import { userModel } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUserController = async (request, response) => {
    try {
        const { name, username, email, password, phone, gender, age, role } = request.body;
        if (!name || !username || !email || !password || !phone || !gender || !age || !role) {
            return response.status(400).json({
                success: false,
                message: 'Please fill in all fields'
            });
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return response.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }
        const existingUsername = await userModel.findOne({ username });
        if (existingUsername) {
            return response.status(400).json({
                success: false,
                message: 'Username already exists'
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({
            name,
            username,
            email,
            password: hashedPassword,
            phone,
            age,
            role,
            gender
        });
        await user.save();
        return response.status(201).json({
            success: true,
            message: 'Account created successfully',
        });
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

export const loginUserController = async (request, response) => {
    try {
        const { email, password } = request.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return response.status(400).json({
                success: false,
                message: 'Email not found'
            });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return response.status(400).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return response.status(200).cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: 'None'
        }).json({
            success: true,
            message: 'Logged in successfully',
            user: {
                name: user.name,
                email: user.email,
                username: user.username,
                phone: user.phone,
                gender: user.gender,
                age: user.age,
                profilePicture: user.profilePicture
            },
            token
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

export const logoutUserController = async (request, response) => {
    try {
        return response.status(200).cookie('token', '', { maxAge: 0 }).json({
            success: true,
            message: 'Logged out successfully',
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

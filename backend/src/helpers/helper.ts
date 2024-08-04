import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
import { Response } from 'express';
import { UserInfer } from "../interface/userInfer";
dotenv.config();

const jwt_secret= process.env.JWT_SECRET ||"";

export const createToken = (user:UserInfer) => {
    return jwt.sign(
      { id: user.id, role: user.role },
      jwt_secret,
      { expiresIn: '1h' }
    );
  };
  
  export const sendTokenResponse = (user:UserInfer, res:Response) => {
    const token = createToken(user);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hour
    });
    res.status(200).json({ success: true });
  };
  
import prisma from '../db/db';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { sendTokenResponse } from '../helpers/helper';
import { registerSchema, loginSchema } from '../zod/validator';
import { RegisterParams } from '../interface/userInfer';

dotenv.config();

export const register = async (req: Request, res: Response) => {
  try {
    // Validate the request body against the Zod schema
    const validatedData = registerSchema.parse(req.body);

    const { name, password, phone, role }: RegisterParams = validatedData;

    // Check if the phone is already in use
    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber: phone },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Phone number already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        password: hashedPassword,
        phoneNumber: phone,
        role,
      },
    });

    sendTokenResponse(user, res);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    // Validate the request body against the Zod schema
    const validatedData = loginSchema.parse(req.body);

    const { phone, password } = validatedData;

    // Check if user exists
    if(!phone){
      res.status(402).json({error : "phone number doesn't exist"})
    }
    const user = await prisma.user.findUnique({
      where: { phoneNumber: phone },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid phone number or password' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid phone number or password' });
    }

    sendTokenResponse(user, res);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

export const logout = (req: Request, res: Response) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
  });
  res.status(200).json({ success: true });
};

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};




export const updateUser = async (req: Request, res: Response) => {
  const userId = req.user?.id; // Get user ID from authenticated user
  const role = req.user?.role;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Validate user existence
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let updatedData: any = {};
    switch (role) {
      case 'TRAINER':
        {
          const { name, phoneNumber, pictureUrl, ytLink, description } = req.body;
          updatedData = {
            name,
            phoneNumber,
            pictureUrl,
            ytLink,
            description,
          };
        }
        break;

      case 'GYM_OWNER':
        {
          const { name, phoneNumber, pictureUrl, ytLink, description, location } = req.body;
          updatedData = {
            name,
            phoneNumber,
            pictureUrl,
            ytLink,
            description,
            location,
          };
        }
        break;

      case 'CLIENT':
        {
          const { name, phoneNumber, weight, height, gender, pictureUrl } = req.body;
          updatedData = {
            name,
            phoneNumber,
            weight,
            height,
            gender,
            pictureUrl,
          };
        }
        break;

      default:
        return res.status(400).json({ error: 'Invalid user role' });
    }

    // Update user details based on role
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedData,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


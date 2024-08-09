import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { createToken, sendTokenResponse } from '../helpers/helper';
import { registerSchema, loginSchema } from '../zod/validator';
import { RegisterParams } from '../interface/userInfer';

dotenv.config();

const prisma = new PrismaClient();

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

export const postMembership = async (req: Request, res: Response) => {
  const userId = req.user?.id; // Get user ID from authenticated user
  const role = req.user?.role; // Get user role from authenticated user
  const { price, title, validity, description } = req.body;

  if (!userId || !role) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

 

  try {
    // Validate trainer existence
    const trainer = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!trainer) {
      return res.status(404).json({ error: 'Trainer not found' });
    }

    // Create the membership
    const membership = await prisma.membership.create({
      data: {
        price,
        title,
        validity,
        description,
        userId, // Assign the membership to the trainer
      },
    });

    res.status(201).json(membership);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMemberships = async (req: Request, res: Response) => {
  const userId = req.user?.id; // Get user ID from authenticated user

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

    // Get memberships
    const memberships = await prisma.membership.findMany({
      where: { userId },
    });

    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



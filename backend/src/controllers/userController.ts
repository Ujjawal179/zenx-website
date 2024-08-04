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
      where: { phone },
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
        phone,
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
    const user = await prisma.user.findUnique({
      where: { phone },
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

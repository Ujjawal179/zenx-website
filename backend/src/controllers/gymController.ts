import { Request, Response } from 'express';
import prisma from '../db/db';
import { gymSchema } from '../zod/validator';



export const createGym = async (req: Request, res: Response) => {
    const userId = req.user?.id; // Get user ID from authenticated user
    const role = req.user?.role; // Get user role from authenticated user
  
    // Check if user is authorized
    if (!userId || role !== 'GYM_OWNER') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Validate the request body against the Zod schema
    const validationResult = gymSchema.safeParse(req.body);
  
    if (!validationResult.success) {
      return res.status(400).json({ errors: validationResult.error.errors });
    }
  
    const { name, location } = validationResult.data;
  
    try {
      // Check if the gym already exists at the same location
      const existingGym = await prisma.gym.findFirst({
        where: {
          location,
          ownerId: userId,
        },
      });
  
      if (existingGym) {
        return res.status(409).json({ error: 'Gym already exists at this location for the owner' });
      }
  
      // Create the new gym
      const gym = await prisma.gym.create({
        data: {
          name,
          location,
          ownerId: userId,
          users: {
            connect: { id: userId }, // Automatically connect the owner as a user of the gym
          },
        },
        include: {
          owner: true, // Include owner details in the response
          users: true, // Include users related to the gym in the response
        },
      });
  
      res.status(201).json(gym);
    } catch (error) {
      console.error('Error creating gym:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
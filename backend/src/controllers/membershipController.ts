import prisma from '../db/db';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { membershipSchema } from '../zod/validator';


dotenv.config();



export const buyMembership = async (req: Request, res: Response) => {
    const userId = req.user?.id; // Get user ID from authenticated user
    const { membershipId } = req.body; // Get the membership ID from the request body
  
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
  
      // Validate membership existence
      const membership = await prisma.membership.findUnique({
        where: { id: membershipId },
        include: {
          Owner: true, // Include the owner (either gym owner or trainer) of the membership
        },
      });
  
      if (!membership) {
        return res.status(404).json({ error: 'Membership not found' });
      }
  
      // Create a transaction for the membership purchase
      const transaction = await prisma.transaction.create({
        data: {
          amount: membership.price,
          description: `Purchase of ${membership.title}`,
          clientId: userId,
        },
      });
  
      // If necessary, associate the user with the gym or trainer (optional based on your business logic)
      // For example, you could add the user to the list of users of a gym, etc.
  
      // Respond with the transaction and membership details
      res.status(200).json({
        message: 'Membership purchased successfully',
        membership,
        transaction,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  export const getMemberships = async (req: Request, res: Response) => {
    const { tag, faculty } = req.query;
  
    try {
      // Search memberships by tag or faculty name
      const memberships = await prisma.membership.findMany({
        where: {
          ...(tag && {
            tags: {
              has: tag as string, // Search for memberships containing the specific tag
            },
          }),
          ...(faculty && {
            faculties: {
              some: {
                name: {
                  contains: faculty as string,
                  mode: 'insensitive', // Optional: case-insensitive search
                },
              },
            },
          }),
        },
        include: {
          faculties: true, // Include faculty information in the results
        },
      });
  
      res.status(200).json(memberships);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const postMembership = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const role = req.user?.role;
  
    if (!userId || !role) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Validate input using Zod
    const validation = membershipSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.errors });
    }
  
    const { price, title, validity, description, tags } = validation.data;
  
    try {
      // Ensure the user is a trainer or gym owner
      if (role !== 'TRAINER' && role !== 'GYM_OWNER') {
        return res.status(403).json({ error: 'Only trainers or gym owners can create memberships' });
      }
  
      // Create the membership
      const membership = await prisma.membership.create({
        data: {
          price,
          title,
          validity,
          description,
          userId, // The trainer or gym owner creating the membership
          tags,   // Activity tags
        },
      });
  
      res.status(201).json(membership);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
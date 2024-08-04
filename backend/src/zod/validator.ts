import { z } from 'zod';
import { Role } from '../interface/userInfer';

export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits long'),
  role: z.nativeEnum(Role),
});

  
  // Define the Zod schema for user login
 export  const loginSchema = z.object({
    phone: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  });
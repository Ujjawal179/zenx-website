import { Role } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof decoded === 'string') {
      return res.status(400).json({ error: "Invalid token format." });
    }

    req.user = decoded as { id: string; role: Role }; // Cast to the expected type
    next();
  } catch (err) {
    return res.status(400).json({ error: "Invalid token." });
  }
};

export default authMiddleware;

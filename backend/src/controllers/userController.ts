import { Request, Response } from 'express';

export default function checkController(req: Request, res: Response): void {
    // Example condition check (customize as needed)
    if (req.query.userId) {
        // Assuming userId is passed as a query parameter
        res.send(`Hello user with ID: ${req.query.userId}`);
    } else {
        res.send('Hello');
    }
}

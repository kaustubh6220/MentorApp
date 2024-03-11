import { NextApiRequest, NextApiResponse } from 'next';
import { clerkClient } from '@clerk/nextjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, newRole } = req.body;

        try {
            const updatedParams = { publicMetadata: { role: newRole } };
            await clerkClient.users.updateUser(userId, updatedParams);
            res.status(200).json({ message: `Successfully updated role of user with ID ${userId} to ${newRole}` });
        } catch (error) {
            console.error('Error updating role:', error);
            res.status(500).json({ error: 'Failed to update user role' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

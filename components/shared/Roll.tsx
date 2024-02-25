import React, { useState } from 'react';
import { clerkClient } from '@clerk/nextjs';

interface UserRoleUpdaterProps {
    userId: string;
}

const UserRoleUpdater: React.FC<UserRoleUpdaterProps> = ({ userId }) => {
    const [newRole, setNewRole] = useState<string>('');

    const handleRoleChange = async () => {
        try {
            const updatedParams = { publicMetadata: { role: newRole } };
            await clerkClient.users.updateUser(userId, updatedParams);
            console.log(`Changing role of user with ID ${userId} to ${newRole}`);
            setNewRole('');
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Change Role</h3>
            <select 
                className="block w-full bg-gray-200 border border-gray-400 p-2 rounded"
                value={newRole} 
                onChange={(e) => setNewRole(e.target.value)}
            >
                <option value="admin">Admin</option>
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
            </select>
            <button 
                className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleRoleChange}
            >
                Save
            </button>
        </div>
    );
};

export default UserRoleUpdater;

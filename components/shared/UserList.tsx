"use client"

import React, { useState } from 'react';
import { clerkClient } from '@clerk/nextjs';

interface UserInfo {
    id: string | null;
    firstName: string | null;
    role: string | null;
}

interface UserTableProps {
    usersInfo: UserInfo[] | null;
}

const UserTable: React.FC<UserTableProps> = ({ usersInfo }) => {
    const [newRoles, setNewRoles] = useState<{ [userId: string]: string }>({});

    const handleRoleChange = async (userId: string) => {
        const newRole = newRoles[userId];
        if (newRole && userId) {
            try {
                const updatedParams = { publicMetadata: { role: newRole } };
                await clerkClient.users.updateUser(userId, updatedParams);
                console.log(`Changing role of user with ID ${userId} to ${newRole}`);
                // Optionally, you can update the UI here to reflect the change
                setNewRoles((prevRoles) => ({ ...prevRoles, [userId]: '' }));
            } catch (error) {
                console.error('Error updating role:', error);
            }
        } else {
            console.error('Invalid user ID or role');
        }
    };

    const handleRoleInputChange = (userId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setNewRoles((prevRoles) => ({ ...prevRoles, [userId]: value }));
    };


    return (
        <div>
            <h2 className="text-xl font-bold mb-4">User List</h2>
            <table className="table-auto w-full border-collapse border border-gray-500">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-500">User ID</th>
                        <th className="px-4 py-2 border border-gray-500">First Name</th>
                        <th className="px-4 py-2 border border-gray-500">Role</th>
                        <th className="px-4 py-2 border border-gray-500">Change Role</th>
                    </tr>
                </thead>
                <tbody>
                {usersInfo?.map((user, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 border border-gray-500">{user.id || ""}</td>
                        <td className="px-4 py-2 border border-gray-500">{user.firstName || ""}</td>
                        <td className="px-4 py-2 border border-gray-500">{user.role || ""}</td>
                        <td className="px-4 py-2 border border-gray-500">
                            {user.id !== null && ( // Check if user.id is not null before rendering the select and button
                                <>
                                    <select
                                        className="block w-full bg-gray-200 border border-gray-400 p-2 rounded"
                                        value={newRoles[user.id || ""] || ''}
                                        onChange={(e) => handleRoleInputChange(user.id || "", e)}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="mentor">Mentor</option>
                                        <option value="mentee">Mentee</option>
                                    </select>
                                    <button
                                        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleRoleChange(user.id || '')} // Ensure user.id is not null
                                    >
                                        Save
                                    </button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}



                </tbody>
            </table>
        </div>
    );
};

export default UserTable;

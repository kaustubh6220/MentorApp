"use client"
import React, { useEffect, useState } from 'react';
import { getProfile } from '@/lib/actions/user.actions';

type UserProps = {
    dbUserId: string;
};

const Profile = ({ dbUserId }: UserProps) => {
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const profileData = await getProfile(dbUserId);
            setProfile(profileData);
        };

        fetchProfile();
    }, [dbUserId]);

    const handleUpdateClick = () => {
        if (profile) {
            window.location.href = `personalProfile/${profile._id}/update`;
        }
    };

    return (
        <div>
            {profile && (
                <div className="ml-10">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <label className="mr-2">Name :</label>
                                <h1>{profile.full_name}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Username :</label>
                                <h1>{profile.username}</h1>
                            </div>
                            {/* Add more fields in the same format */}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <label className="mr-2">Year of Admission :</label>
                                <h1>{profile.year_of_admission}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Class :</label>
                                <h1>{profile.class}</h1>
                            </div>
                            {/* Add more fields in the same format */}
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-4 ml-10">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleUpdateClick}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default Profile;

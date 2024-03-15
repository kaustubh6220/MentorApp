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
            window.location.href = `facultyProfile/${profile._id}/update`;
        }
    };

    return (
        <div>
            {profile && (
                <div className="ml-10">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <label className="mr-2">Name :</label>
                                <h1>{profile.full_name}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Username :</label>
                                <h1>{profile.username}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Birth Place :</label>
                                <h1>{profile.birth_place}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Nationality :</label>
                                <h1>{profile.nationality}</h1>
                            </div>



                            <div className="flex items-center">
                                <label className="mr-2">Present Address :</label>
                                <h1>{profile.present_address}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Permanent Address :</label>
                                <h1>{profile.permanent_address}</h1>
                            </div>

                            {/* Add more fields in the same format */}
                        </div>
                        <div className="flex flex-col">

                            
                            <div className="flex items-center">
                                <label className="mr-2">Unique Id :</label>
                                <h1>{profile.uniqId}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">State :</label>
                                <h1>{profile.state}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Religion :</label>
                                <h1>{profile.religion}</h1>
                            </div>



                            <div className="flex items-center">
                                <label className="mr-2">Pin Code :</label>
                                <h1>{profile.pin_code}</h1>
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

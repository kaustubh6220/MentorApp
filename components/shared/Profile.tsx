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
                                <label className="mr-2">Father's Name :</label>
                                <h1>{profile.father_name}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Parents Mobile No :</label>
                                <h1>{profile.parents_mobile}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Guardian Name :</label>
                                <h1>{profile.guardian_name}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Guardian Profession :</label>
                                <h1>{profile.guardian_profession}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Relation :</label>
                                <h1>{profile.relation}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Present Address :</label>
                                <h1>{profile.present_address}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Permanent Address :</label>
                                <h1>{profile.permanent_address}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Mentor Name :</label>
                                <h1>{profile.mentor_name}</h1>
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
                            <div className="flex items-center">
                                <label className="mr-2">State :</label>
                                <h1>{profile.state}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Religion :</label>
                                <h1>{profile.religion}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Occupation :</label>
                                <h1>{profile.occupation}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Address :</label>
                                <h1>{profile.address}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Mobile Number :</label>
                                <h1>{profile.guardian_mobile_number}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Occupation :</label>
                                <h1>{profile.occupation}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Annual Income :</label>
                                <h1>{profile.annual_income}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Pin Code :</label>
                                <h1>{profile.pin_code}</h1>
                            </div>
                            <div className="flex items-center">
                                <label className="mr-2">Mentor ID :</label>
                                <h1>{profile.mentor_id}</h1>
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

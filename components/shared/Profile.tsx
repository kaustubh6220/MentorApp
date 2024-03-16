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
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <tbody>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>Field</th>
                                <th style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>Value</th>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.full_name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Username</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.username}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Enrollment No</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.uniqId}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Birth Place</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.birth_place}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Nationality</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.nationality}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Father's Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.father_name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Parents Mobile No</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.parents_mobile}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Guardian Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Guardian Profession</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_profession}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Relation</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.relation}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Present Address</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.present_address}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Permanent Address</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.permanent_address}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Mentor Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.mentor_name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Year of Admission</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.year_of_admission}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Class</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.class}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>State</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.state}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Religion</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.religion}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Occupation</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.occupation}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Address</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.address}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Mobile Number</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_mobile_number}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Annual Income</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.annual_income}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Pin Code</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.pin_code}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Mentor ID</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.mentor_id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            
            <div className="mt-4 ml-auto mr-10"> {/* ml-auto to push the button to the right */}
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

"use client";

// Import necessary modules and components
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

// Define the type for user data
interface UserData {
    _id: string;
    username: string;
    email:string;
    name:string;
    gender:string;
    mobileno:string;
    dateofbirth:string;
    empid:string;
    // Add other properties as needed
}

// ProfilePage component definition
export default function ProfilePage() {
    const router = useRouter();
    const [userData, setUserData] = useState<UserData | null>(null);

    // Function to fetch user details from the backend
    const getUserDetails = async () => {
        try {
            // Make a GET request to the backend API route
            const res = await axios.get<{ data: UserData }>("/api/users/me");

            // Update state with the received user data
            setUserData(res.data.data);
        } catch (error) {
            // Handle errors and display a toast notification
            console.error("Error fetching user details:", error);
            toast.error("Failed to fetch user details");
        }
    };

    // Fetch user details when the component mounts
    useEffect(() => {
        getUserDetails();
    }, []);

    // Render profile page content
    return (
        <div className="py-2">
            <h1 className="head-text">User Profile</h1>
            
            <div className="bg-white rounded-sm shadow-md p-4 mt-4 ">
                {userData ? (
                    <>  
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Photo:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.username}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Signature:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.username}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Username:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.username}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Full Name :</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.name}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Gender:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.gender}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Email Id:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.email}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Mobile No:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.mobileno}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Employee ID:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.empid}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-mono mr-2">Date of Birth:</span>
                                
                            </div>
                            <div className="flex items-center">
                                <span className="font-mono">{userData.dateofbirth}</span>
                            </div>

                        </div>                                      
                        
                        
                        


                    </>


                ) : (
                    "Loading..."
                )}
            </div>
            <div className=" bg-white rounded-sm shadow-md p-4 mt-4">
                <Link href="/upload" className=" border-sky-200 hover:border-sky-400 bg-white border-2 rounded-sm p-1">Update</Link>
            </div>
        </div>
    );
}

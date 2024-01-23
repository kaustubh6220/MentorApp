// import { UserButton } from "@clerk/nextjs";
"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserData {
  map(arg0: (user: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  studentName: string;
  mentorEmpid: string;
  studentRollno:string;
  
}

// ProfilePage component definition
export default function ProfilePage({params}:{params:{id:string}}) {
  const id=params.id 
  
  console.log("Empolyee ID :",id)
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);  


  // Function to fetch user details from the backend
  const getUserDetails = async () => {
    try {
      // Make a GET request to the backend API route
      const res = await axios.get<{ data: UserData }>(`/api/users/studentlist/${id}`);
      

      // Update state with the received user data
      setUserData(res.data.data);
    } catch (error) {
      // Handle errors and display a toast notification
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
    <h1>{params.id}</h1>
      {userData ? (
        <table className=" border-spaci border-slate-600 border-2 items-center justify-center w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className=" border-slate-600 border-2">
              <th>Name of Student</th>
              <th>Roll Number</th>
              <th>Mentor</th>

            </tr>
          </thead>
          <tbody>
          {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.studentName}</td>
                <td>{user.studentRollno}</td>

                <td>{user.mentorEmpid}</td>
                
              </tr>
            ))}
          </tbody>
         
        </table>
      ) : (
        "Loading..."
      )}
    </>
  );
}

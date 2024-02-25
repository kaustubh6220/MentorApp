// import { UserButton } from "@clerk/nextjs";
"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserData {
  map(arg0: (user: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  studentName: string;
  studentEnrollmentno: string;
  _id:string;
}

// ProfilePage component definition
export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  

  // Function to fetch user details from the backend
  const getUserDetails = async () => {
    try {
      // Make a GET request to the backend API route
      const res = await axios.get<{ data: UserData }>("/api/admin/studentlist");

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
    <h1 className="head-text  py-4">Mentee List</h1>
      {userData ? (
        <table className=" border-spaci border-slate-600 border-2 items-center justify-center w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className=" border-slate-600 border-2">
              <th>Name of Student</th>
              <th>Enrollment Number</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
          {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.full_name}</td>
                <td>{user.username}</td>
                <td className="text-sky-500 hover:text-sky-700">
                  <Link href={`/menteelist/${user.username}`}>View Profile</Link>
                </td>
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

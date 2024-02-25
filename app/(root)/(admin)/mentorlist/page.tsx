// import { UserButton } from "@clerk/nextjs";
"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserData {
  map(arg0: (user: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  name: string;
  empid: string;
}

// ProfilePage component definition
export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

  // Function to fetch user details from the backend
  const getUserDetails = async () => {
    try {
      // Make a GET request to the backend API route
      const res = await axios.get<{ data: UserData }>("/api/admin/mentorlist");

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
      <h1 className="head-text py-4">Mentor List</h1>

      {userData ? (
        <table className=" border-spaci border-slate-600 border-2 items-center justify-center w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className=" border-slate-600 border-2">
              <th>Name of Professor</th>
              <th>Employee Id</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
          {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.empid}</td>
                <td className="text-sky-500 hover:text-sky-700">
                  <Link href={`/studentbatch/${user.empid}`}>View Batch</Link>
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

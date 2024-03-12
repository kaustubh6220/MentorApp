"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use useRouter instead of next/navigation
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserData {
  full_name: string;
  username: string;
  _id: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData[] | null>(null);

  const getUserDetails = async () => {
    try {
      const res = await axios.get<{ data: UserData[] }>("/api/admin/studentlist");
      setUserData(res.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold py-4">Mentee List</h1>
      {userData ? (
        <section className="wrapper overflow-x-auto">
        <table className="w-full border-collapse border-t">
          <thead>
            <tr className="p-medium-14 border-b text-grey-500">
              <th className="min-w-[250px] py-3 text-left">Student Name</th>
              <th className="min-w-[200px] flex-1 py-3 pr-4 text-left">Enrollment No</th>
              <th className="min-w-[150px] py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} 
              className="p-regular-14 lg:p-regular-16 border-b "
              style={{ boxSizing: 'border-box' }}
              >
                <td className="min-w-[250px] py-4 text-black">{user.full_name}</td>
                <td className="min-w-[200px] flex-1 py-4 pr-4">{user.username}</td>
                <td className="p-2 text-blue-500 hover:text-blue-700">
                  <Link href={`/menteelist/${user.username}`}>View Profile</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </section>
      ) : (
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      )}
    </>
  );
}

// import { UserButton } from "@clerk/nextjs";
"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserData {
  map(arg0: (user: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  username:string;
  studentName: string;
  studentEnrollmentno: string;
  _id:string;
  studentGender:string;
  studentEmail:string;
  studentMobile:string;
  dateofbirth:string;
  yearOfAdd:string;
  placeOfBirth:string;
  state:string;
  nationality:string;
  religion:string;
  catagory:string;
  caste:string;
  fatherName:string;
              
  fatherOcc:string;
  fatherPhone:string;
  motherName:string;
  motherOcc:string;
  motherPhone:string;
  localGuard:string;
  guardAdd:string;
  guardPhone:string;
  guardProfession:string;
  guardRelation:string;
  annualIncome:string;
  presAddress:string;
  perAddress:string;
  }

// ProfilePage component definition
export default function ProfilePage({params}:{params:{id:string}}) {
  const id=params.id
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isProfileVisible, setProfileVisibility] = useState(false);
  const [isHealthVisible, setHealthVisibility] = useState(false);



  // Function to fetch user details from the backend
  const getUserDetails = async () => {
    try {
      // Make a GET request to the backend API route
      const res = await axios.get<{ data: UserData }>(`/api/admin/studentprof/${id}`);

      // Update state with the received user data
      setUserData(res.data.data);
    } catch (error) {
      // Handle errors and display a toast notification
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details");
    }
  };
  const toggleProfileVisibility = () => {
    // Toggle the visibility state
    setProfileVisibility((prevVisibility) => !prevVisibility);
  };

  const toggleHealthVisibility = () => {
    // Toggle the visibility state
    setHealthVisibility((prevVisibility) => !prevVisibility);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
    <button
        className="head-text w-full p-4 bg-slate-200 rounded-sm "
        onClick={toggleProfileVisibility}
      >
        Profile
      </button>
      {isProfileVisible && userData ? (
        <>
        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">
        
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Photo:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.studentEnrollmentno}</span>
            </div>

          

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Username:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.username}</span>
            </div>

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Name of Student:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.studentName}</span>
            </div>

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Year of Admission:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.yearOfAdd}</span>
            </div>

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Email Id:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.studentEmail}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Date of Birth:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.dateofbirth}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Place of Birth:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.placeOfBirth}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">State</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.state}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Nationality:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.nationality}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Religion:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.religion}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Catagory:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.catagory}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Caste:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.caste}</span>
            </div>
          </div>
        </div>


        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Father's Full Name:</span>                
            </div>        
            <div className="flex items-center">
                <span className="font-mono">{userData.fatherName}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Occupation:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.fatherOcc}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Phone:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.fatherPhone}</span>
            </div>
          </div>
        </div>

        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Mother's Full Name:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.motherName}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Occupation:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.motherOcc}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Phone:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.motherPhone}</span>
            </div>
          </div>
        </div>

        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Name of the local guardian:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.localGuard}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Address:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.guardAdd}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Phone Number:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.guardPhone}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Profession:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.guardProfession}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Relation:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.guardRelation}</span>
            </div>
          </div>
        </div>

        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">        
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Annual Income:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.annualIncome}</span>
            </div>
          </div>
        </div>

        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Present Address:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.presAddress}</span>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Permanent Address:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.perAddress}</span>
            </div>
          </div>
        </div>
        <div className="bg-white mt-4 rounded-sm p-2">
          <div className="grid grid-cols-2 gap-4">        

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Gender:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.studentGender}</span>
            </div>       

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Mobile No:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.studentMobile}</span>
            </div>

            <div className="flex items-center">
                <span className="text-lg font-mono mr-2">Enrollment No:</span>
                
            </div>
            <div className="flex items-center">
                <span className="font-mono">{userData.studentEnrollmentno}</span>
            </div>
          </div>
        </div>

        

    
      </>                                  
    
      
        ) : null}




    <div className="py-4">    
      <button
          className="head-text w-full p-4 bg-white rounded-sm "
          onClick={toggleHealthVisibility}
        >
          Student's Health Service
        </button>
        {isHealthVisible && userData ? (
          <>
          <h1>comming soon</h1>
          </>                                  
      
        
          ) : null}
      </div>
      <div className="py-4">    
      <button
          className="head-text w-full p-4 bg-white rounded-sm "
          onClick={toggleHealthVisibility}
        >
          Part I : Performance Record in Previous Institute
        </button>
        {isHealthVisible && userData ? (
          <>
          <h1>comming soon</h1>
          </>                                  
      
        
          ) : null}
      </div>
      <div className="py-4">    
      <button
          className="head-text w-full p-4 bg-white rounded-sm "
          onClick={toggleHealthVisibility}
        >
          Part II : Performance Examination Profile Academic
        </button>
        {isHealthVisible && userData ? (
          <>
          <h1>comming soon</h1>
          </>                                  
      
        
          ) : null}
      </div>
      <div className="py-4">    
      <button
          className="head-text w-full p-4 bg-white rounded-sm "
          onClick={toggleHealthVisibility}
        >
          Part III : Other Academic Profile
        </button>
        {isHealthVisible && userData ? (
          <>
          <h1>comming soon</h1>
          </>                                  
      
        
          ) : null}
      </div>
      <div className="py-4">    
      <button
          className="head-text w-full p-4 bg-white rounded-sm "
          onClick={toggleHealthVisibility}
        >
          Mentorship Meet
        </button>
        {isHealthVisible && userData ? (
          <>
          <h1>comming soon</h1>
          </>                                  
      
        
          ) : null}
      </div>
    </>
  );
}

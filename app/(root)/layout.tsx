import '../globals.css';
import { ReactNode } from 'react';
import { auth, clerkClient } from '@clerk/nextjs';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import {getUserByClerkId, getUserById } from '@/lib/actions/user.actions';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Mentor Mentee App',
  description: 'MIT ADT University Mentor Mentee App',
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const { sessionClaims  } = auth();
  const userId = sessionClaims?.userId as string;
  console.log("ghe baba",userId)

  let newId = 'waiting'; 

  if (userId != null) {
    newId = await getUserByClerkId(userId);
    console.log("new ID", newId);

  }
    

  const fetchAndUpdateUser = async () => {
    try {
      const user = await clerkClient.users.getUser(userId);
      const role = user.publicMetadata?.role as string;

      if (['admin', 'faculty', 'mentor'].includes(role)) {
        forceUpdate(); 
      } else {
        const updatedParams = { publicMetadata: { role: 'mentee',_id:newId} };
        await clerkClient.users.updateUser(userId, updatedParams);
        forceUpdate(); 
      }
    } catch (error) {
      console.error('Error fetching/updating user:', error);
    }
  };

  const forceUpdate = () => {
    // This function triggers a re-render without using useState
    // Note: It's generally recommended to use useState, but this is an alternative
    // and may not be considered a best practice in all scenarios.
  };

  if (userId) {
    // Fetch and update user information
    fetchAndUpdateUser();
  }

  return (
    <div className="flex h-screen flex-col">
      <Header userRole={sessionClaims?.role as string} />
      <main className="flex-1 m-4">{children}</main>
      <Footer />
    </div>
  );
}

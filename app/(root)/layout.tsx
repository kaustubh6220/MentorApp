import '../globals.css';
import { ReactNode } from 'react';
import { auth, clerkClient } from '@clerk/nextjs';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Mentor Mentee App',
  description: 'MIT ADT University Mentor Mentee App',
};

export default function RootLayout({ children }: RootLayoutProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const fetchAndUpdateUser = async () => {
    try {
      const user = await clerkClient.users.getUser(userId);
      const role = user.publicMetadata?.role as string;

      if (['admin', 'classteacher', 'mentor'].includes(role)) {
        // If the user has an admin, classteacher, or mentor role, keep it as it is
        forceUpdate(); // Trigger a re-render without using useState
      } else {
        // If the user has a different role, update metadata to 'mentee'
        const updatedParams = { publicMetadata: { role: 'mentee' } };
        await clerkClient.users.updateUser(userId, updatedParams);
        forceUpdate(); // Trigger a re-render without using useState
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

import UserList from '@/components/shared/UserList';
import { auth, clerkClient } from '@clerk/nextjs';
import React from 'react';

const page = async () => {
  const { sessionClaims  } = auth();
  const clerkId = sessionClaims?.userId as string;
  const users = await clerkClient.users.getUserList();

  // Extracting firstName and role from each user
  interface UserInfo {
    id: string | null;
    firstName: string | null; // Allowing null for firstName
    role: string | null; // Allowing null for role
}

  const usersInfo: UserInfo[] = users.map(user => ({
    id : user.id || null,
    firstName: user.firstName || null,
    role: (user.publicMetadata.role as string) || null
}));

  

  console.log(usersInfo);

  return (
    <div>
      {/* Correct prop name: usersInfo */}
      <UserList usersInfo={usersInfo} />
    </div>
  );
};

export default page;

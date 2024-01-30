import React from 'react'

import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import { getProfileById } from '@/lib/actions/profile.actions';
import { auth, clerkClient } from '@clerk/nextjs';
import { createUserProfile, getDbId } from '@/lib/actions/user.actions';
import ProfileForm from '@/components/shared/ProfileForm';


const personalProfile = async ({params:{id},searchParams}:SearchParamProps) => {
  const { sessionClaims  } = auth();
  const clerkId = sessionClaims?.userId as string;
  console.log(clerkId)
  const userDatabaseId = await getDbId(clerkId);
  // const userProfileData = {
  //   dbUserId: userDatabaseId._id,
  //   username:userDatabaseId.username
  // };
  const dbUserId = userDatabaseId._id
  const username = userDatabaseId.username

  console.log("bhai ye hai id",id)


  // Pass the object to the createUserProfile function
  // const userProfile = await createUserProfile(userProfileData);

  return (
    <div>
      <ProfileForm dbUserId={dbUserId} username={username} id={id} />
    </div>
  )
}

export default personalProfile

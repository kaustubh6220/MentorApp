import React from 'react'

import { SearchParamProps } from '@/types'
import Image from 'next/image';
import { getProfileById } from '@/lib/actions/profile.actions';
import { auth, clerkClient } from '@clerk/nextjs';
import { createUserProfile, getDbId, getProfile, initialCreateProfile } from '@/lib/actions/user.actions';
import ProfileForm from '@/components/shared/ProfileForm';
import Profile from '@/components/shared/Profile';


const personalProfile = async ({params:{id},searchParams}:SearchParamProps) => {
  const { sessionClaims  } = auth();
  const clerkId = sessionClaims?.userId as string;
  console.log(clerkId)
  const userDatabaseId = await getDbId(clerkId);
  const userProfileData = {
    dbUserId: userDatabaseId._id,
    username:userDatabaseId.username
  };
  const dbUserId = userDatabaseId._id 
  const username = userDatabaseId.username
  // const profile = await getProfile(dbUserId)
  // const profileId = profile._id
  // console.log(dbUserId)



  const userProfile = await initialCreateProfile(userProfileData);

  return (
    <div>
      <Profile dbUserId={dbUserId} />
    </div>
  )
}

export default personalProfile

'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'

import { handleError } from '@/lib/utils'

import { CreateUserParams, FacultyProfileParams, InitialParams, ProfileParams, UpdateUserParams } from '@/types'
import Profile from '../database/models/profile.model'

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase()

    const user = await User.findById(userId)

    if (!user) throw new Error('User not found')
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

export async function getUserByClerkId(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId }).select('_id');

    if (!user) {
      throw new Error('User with clerkId ' + userId + ' not found');
    }

    const userIdString = user._id.toString(); // Convert ObjectId to string
    console.log(userIdString)
    
    return JSON.parse(JSON.stringify(userIdString))
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase()

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) {
      throw new Error('User not found')
    }

    // Unlink relationships
    

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    handleError(error)
  }
}

export async function initialCreateProfile(userProfileData:InitialParams){
  try {
    await connectToDatabase();

    // Check if a user profile with the provided dbUserId exists
    const existingProfile = await Profile.findOne({ dbUserId: userProfileData.dbUserId });

    if (existingProfile) {
      // If the profile exists, update it with the new values
      const updatedProfile = await Profile.findOneAndUpdate(
        { dbUserId: userProfileData.dbUserId },
        userProfileData,
        { new: true }
      );
      
      return updatedProfile;
    } else {
      // If the profile doesn't exist, create a new profile
      const newUserProfile = await Profile.create(userProfileData);
      return newUserProfile;
    }
  } catch (error) {
    handleError(error);
  }

}

export async function createUserProfile(userProfileData: ProfileParams) {
  try {
    await connectToDatabase();

    // Check if a user profile with the provided dbUserId exists
    const existingProfile = await Profile.findOne({ dbUserId: userProfileData.dbUserId });

    if (existingProfile) {
      // If the profile exists, update it with the new values
      const updatedProfile = await Profile.findOneAndUpdate(
        { dbUserId: userProfileData.dbUserId },
        userProfileData,
        { new: true }
      );
      
      return updatedProfile;
    } else {
      // If the profile doesn't exist, create a new profile
      const newUserProfile = await Profile.create(userProfileData);
      return newUserProfile;
    }
  } catch (error) {
    handleError(error);
  }
}


export async function createFacultyProfile(userProfileData: FacultyProfileParams) {
  try {
    await connectToDatabase();

    // Check if a user profile with the provided dbUserId exists
    const existingProfile = await Profile.findOne({ dbUserId: userProfileData.dbUserId });

    if (existingProfile) {
      // If the profile exists, update it with the new values
      const updatedProfile = await Profile.findOneAndUpdate(
        { dbUserId: userProfileData.dbUserId },
        userProfileData,
        { new: true }
      );
      
      return updatedProfile;
    } else {
      // If the profile doesn't exist, create a new profile
      const newUserProfile = await Profile.create(userProfileData);
      return newUserProfile;
    }
  } catch (error) {
    handleError(error);
  }
}

export async function getProfile(dbUserId:string){
  try {
    await connectToDatabase()
    
    const userProfile = await Profile.findOne({ dbUserId:dbUserId });
    return JSON.parse(JSON.stringify(userProfile))
  } catch (error) {
    handleError(error)
  }

}




export async function getDbId(clerkId:string){
  try {
    await connectToDatabase()
    
    const userDatabaseId = await User.findOne({ clerkId });
    return JSON.parse(JSON.stringify(userDatabaseId))
  } catch (error) {
    handleError(error)
  }
}


export async function getUniqueId(userId:string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId }).select('uniqId');

    if (!user) {
      throw new Error('User with clerkId ' + userId + ' not found');
    }

    const uniqId = user.uniqId.toString(); // Convert ObjectId to string
    console.log(uniqId)
    
    return JSON.parse(JSON.stringify(uniqId))
  } catch (error) {
    handleError(error);
    throw error;
  }
}
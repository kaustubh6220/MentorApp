import { connectToDatabase } from "@/lib/database"
import { handleError } from "@/lib/utils"

import {
    CreateUserParams,
    UpdateUserParams,
    ProfileParams
  } from '@/types'

import User from "@/lib/database/models/user.model"
import Profile from "../database/models/profile.model"
  


  
  const populateEvent = (query: any) => {
    return query
      .populate({ path: 'user', model: User, select: '_id firstName lastName' })
  }



  

export async function getProfileById(userId: string) {
    try {
      await connectToDatabase()
  
      const profile = await populateEvent(Profile.findById(userId))
  
      if (!profile) throw new Error('Profile not found')
  
      return JSON.parse(JSON.stringify(profile))
    } catch (error) {
      handleError(error)
    }
  }
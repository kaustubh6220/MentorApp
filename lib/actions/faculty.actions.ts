import { InitialParams } from "@/types";
import { connectToDatabase } from "../database";
import Profile from "../database/models/profile.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";

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



  export async function getUniqueId(userDbId:string) {
    try {
      await connectToDatabase();
  
      const user = await Profile.findOne({ dbUserId: userDbId }).select('uniqId');
  
      if (!user) {
        throw new Error('User with clerkId ' + userDbId + ' not found');
      }
  
      const uniqId = user.uniqId.toString(); // Convert ObjectId to string
      console.log(uniqId)
      
      return JSON.parse(JSON.stringify(uniqId))
    } catch (error) {
      handleError(error);
      throw error;
    }
  }



import {Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    email:string;
    username:string;
    firstname:string;
    lastname:string;
    photo:string;
    full_name:string;
    date_of_birth:Date;
    state:string;
    nationality:string;
    religion:string;
    present_address: string,  
    pin_code: string,  
    permanent_address: string,  
    mentor_id:string,  
    dbUserId: string
  }

const ProfileSchema = new Schema({
  email: { type: String},
  username: { type: String},
  firstName: { type: String},
  lastName: {type: String},
  photo: { type: String},  
  full_name : {type:String},
  date_of_birth: {type:Date},  
  state: {type:String},  
  nationality: {type:String},  
  religion: {type:String},  
  present_address: {type:String},  
  pin_code: {type:String},  
  permanent_address: {type:String},  
  uniqid:{type:String},  
  dbUserId: { type:String },

})

const mentorProfile = models.Profile || model('mentorProfile', ProfileSchema);

export default mentorProfile;
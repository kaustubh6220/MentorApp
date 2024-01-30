import {Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    email:string;
    username:string;
    firstname:string;
    lastname:string;
    photo:string;
    full_name:string;
    year_of_admission:string;
    class:string;
    date_of_birth:Date;
    birth_place:string;
    state:string;
    nationality:string;
    religion:string;
    father_name: string,  
    occupation: string,  
    parents_mobile: string,  
    guardian_name: string,  
    address: string,  
    guardian_profession: string,  
    guardian_mobile_number: string,  
    relation: string,  
    annual_income: string,  
    present_address: string,  
    pin_code: string,  
    permanent_address: string,  
    mentor_id:string,  
    mentor_name: string,  
    batch:string,

    dbUserId: string
  }

const ProfileSchema = new Schema({
  email: { type: String},
  username: { type: String},
  firstName: { type: String},
  lastName: {type: String},
  photo: { type: String},  
  full_name : {type:String},
  year_of_admission: {type:String},
  class: {type:String},  
  date_of_birth: {type:Date},  
  birth_place: {type:String},  
  state: {type:String},  
  nationality: {type:String},  
  religion: {type:String},  
  father_name: {type:String},  
  occupation: {type:String},  
  parents_mobile: {type:String},  
  guardian_name: {type:String},  
  address: {type:String},  
  guardian_profession: {type:String},  
  guardian_mobile_number: {type:String},  
  relation: {type:String},  
  annual_income: {type:String},  
  present_address: {type:String},  
  pin_code: {type:String},  
  permanent_address: {type:String},  
  mentor_id:{type:String},  
  mentor_name: {type:String},  
  batch:{type:String},
  dbUserId: { type:String },

})

const Profile = models.Profile || model('Profile', ProfileSchema);

export default Profile;
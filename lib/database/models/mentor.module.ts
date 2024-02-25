import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
    
    
    name:{
        type:String
    },
    empid:{
        type:String
    },
    


})

const Mentor = mongoose.models.mentor || mongoose.model("mentor",mentorSchema);

export default Mentor;
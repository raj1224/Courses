import mongoose from "mongoose";

const ContactSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name is required"],
            trim:true,
            maxlenght:[100,"Name cannot exced 100 characters"]
        },
        email:{
            type:String,
            required:[true,"Email is required"],
            trim:true,
            lowercase:true,
            maxlenght:[/^\S+@\S+\.\S+$/,"email cannot exced 100 characters"]
        },
        subject:{
            type:String,
            required:[true,"subject is required"],
            trim:true,
            maxlenght:[200,"Subject cannot exced 100 characters"]
        },
        message:{
             type:String,
            required:[true,"message is required"],
            trim:true,
            maxlenght:[1000,"message cannot exced 100 characters"]
        },
        status:{
             type:String,
             enum:["new","read","replied"],
             default:"new"
        },

    },{timestamps:true}
)
const Contact=mongoose.models.Contact || mongoose.model("Contact",ContactSchema)
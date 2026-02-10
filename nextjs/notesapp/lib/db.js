import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URL;
let isConnected=false;

async function dbConnect(params) {
    if(isConnected){
        console.log("Mongodb is already connected")
        return
    }
    try {
        const db=await mongoose.connect(MONGODB_URI);
        isConnected=db.connections[0].readyState===1;
        console.log("connected ot mongodb:",db);
        
    } catch (error) {
        console.error("failed ot connect to mongodb:",error)
        throw error
    }
    
}
export default dbConnect

// edge function?
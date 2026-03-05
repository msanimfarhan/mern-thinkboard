import mongoose from "mongoose"


export const connectDB = async () =>{
    try{
        const uri = process.env.MONGO_URI;
        if(!uri){
            throw new Error("MONGO_URI is missing, check .env file");
        }
        await mongoose.connect(uri);
        console.log("MONGODB CONNECTED SUCCESSFULYY!!");

    }catch(erorr){
        console.log("Error connecting to MONGODB", erorr);
        process.exit(1);

    }
}
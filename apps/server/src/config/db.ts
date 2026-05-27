import mongoose, { mongo } from "mongoose";
import {env} from "./env";

export async function connectDB(): Promise<void>{
    try{
        await mongoose.connect(env.MONGO_URI);
        console.log('MongoDB connected');
    }
    catch(error){
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }

    mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected');
    }
    );

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    }  );
    
}
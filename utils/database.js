import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('Mongodb is already connected');
        return;
    };

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "agrifarm",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDb connected');
    } catch (error) {
        console.log(error);
    }
}

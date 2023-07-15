import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectDataBase = process.env.URI_CONNECT_MONGODB;

        await mongoose.connect(`${connectDataBase}`);
        console.log("base de datos conectada 🥰🤗🤙");
    } catch (error) {
        console.log(error);
    }
};
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connectes', () => console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/educora`)
    }
    catch (error) {
        console.log(error.message);
    }
}

export default connectDB;
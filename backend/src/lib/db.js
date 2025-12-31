import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const {MONGO_URI} = process.env;
        if( !MONGO_URI) throw new error ("MONGO_URI is not set");

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED: ", conn.connection.host)
    } catch (error) {
        console.error("error connecting to mongodb", error)
        process.exit(1) // 1 status code means fail and 0 means success
    }
}
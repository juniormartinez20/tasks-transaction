import mongoose  from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)

        console.log(`Mongo DB is connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error fail, ${error.message}`)
        process.exit(1)
    }
}
import mongoose from 'mongoose'

let isConnected = false


export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log(`Database is already connected`)
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'todo',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        isConnected = true
        console.log(`Database connected successfully`)
    } catch (error) {
        console.log(`error connecting to database`, error)
    }
}
import mongoose from "mongoose"

const connectDB = async () => {
    const mongoURL = process.env.MONGO_URL

    if (!mongoURL) {
        throw new Error("MONGO_URL não foi definida no arquivo .env")
    }

    try{
        await mongoose.connect(mongoURL)
        console.log("conectado")
    }
    catch (error) {
        throw new Error("Houve um erro", { cause: error})
    }
}

export default connectDB
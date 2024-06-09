import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jaijoshi:820GQPOYG@cluster0.wjlep0g.mongodb.net/chore_hero').then(() => console.log("DB Connected"))
}
import mongoose from "mongoose";
const newsSchema = new mongoose.Schema({
    headline: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    img: { type: String, require: true }
})
export const News  = mongoose.model('news',newsSchema);
import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    title: { type: String, require: true },
    actor: { type: String, require: true },
    posterLink: { type: String, require: true },
    imdbRating: { type: Number, require: true },
    releaseDate: { type: Date, default: Date.now }
})

export const Movie = mongoose.model('Movies',movieSchema)
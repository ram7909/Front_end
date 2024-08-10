import { Movie } from "../Model/Movie.js";

// Add Movies
export const addMovie = async (req, res) => {
    const { title, actor, posterLink, imdbRating } = req.body;
    try {
        let movie = await Movie.create({ title, actor, posterLink, imdbRating });
        res.json({
            message: 'Movie Added Successfully',
            movie,
            success: true
        })
    }
    catch (error) {
        res.json({
            message: 'Internal Server Error',
            success: false
        })
    }
}

// Get All Movies
export const getMovie = async (req, res) => {
    try {
        let movie = await Movie.find();
        res.json({
            message: 'These is Your Movies',
            movie,
            success: true
        })
    } catch (error) {
        res.json({
            message: 'Internal Server Error',
            success: false
        })
    }
}

// Get Movies By ID
export const getMovieByID = async (req, res) => {
    let id = req.params.id
    try {
        let movie = await Movie.find({ _id: id })
        res.json({
            message: 'These is Your Movie',
            movie,
            success: true
        })
    } catch (error) {
        res.json({
            message: 'Internal Server Error',
            success: false
        })
    }
}


// Delete Movie By ID
export const deleteMovieByID = async (req, res) => {
    let id = req.params.id
    try {
        let movie = await Movie.findByIdAndDelete(id);
        if (!movie) return res.json({ message: "Invalid ID", success: false })
        res.json({
            message: 'These is Your Deleted Movie',
            movie,
            success: true
        })
    } catch (error) {
        res.json({
            message: 'Internal Server Error',
            success: false
        })
    }
}

// Update or Edit Movie By ID
export const editMovieByID = async (req, res) => {
    let id = req.params.id;
    try {
        let movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        if (!movie) return res.json({ message: "Invalid ID", success: false })
            res.json({
                message: 'These is Your Updated Movie',
                movie,
                success: true
            })
    }
    catch (error) {
        res.json({
            message: 'Internal Server Error',
            success: false
        })
    }
}
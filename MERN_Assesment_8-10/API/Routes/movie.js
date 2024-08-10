import express from "express";
import { addMovie, deleteMovieByID, editMovieByID, getMovie, getMovieByID } from "../controllers/movie.js";

const router = express.Router();


// @method = put
// @route = /api/movies/add
// @desc = to add movie
router.post('/add',addMovie);

// @method = get
// @route = /api/movies/get
// @desc = to see all movies
router.get('/get',getMovie);

// @method = get
// @route = /api/movies/id/:id
// @desc = to see movies by id
router.get('/id/:id',getMovieByID)

// @method = delete
// @route = /api/movies/delete/:id
// @desc = to delete movie by id
router.delete('/delete/:id',deleteMovieByID)

// @method = put
// @route = /api/movies/update/:id
// @desc = to edit movie
router.put('/update/:id',editMovieByID)
export default router
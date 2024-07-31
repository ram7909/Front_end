import express from "express";
import { addCars } from "../controllers/car.js";

const router = express.Router();


// @method - add
// @route - /api/cars/add
// @desc - to add car
router.post('/add',addCars)

export default router
import { Car } from "../Models/Car.js";

// Add Cars
export const addCars = async (req,res)=>{
    const { carName, carModel, carEngine, fuelType} = req.body;
     let car = await Car.create({carName, carModel, carEngine, fuelType})

     res.json({
        message:'car added succesfully',
        car,
        success:true
     })
}
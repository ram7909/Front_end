import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    carName: { type: String,require:true},
    carModel: { type: Number,require:true},
    carEngine: { type: String,require:true},
    fuelType: { type: String,require:true},
    manufactureDate:{type: Date, default:Date.now}
})

export const Car = mongoose.model("cars",carSchema)
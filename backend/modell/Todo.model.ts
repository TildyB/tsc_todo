import mongoose from "mongoose";

const Schema = mongoose.Schema

let Todo = new Schema({
    name : String,
    location: String,
    isDone: Boolean,
})

const Data = mongoose.model("Todo",Todo)

export default Data
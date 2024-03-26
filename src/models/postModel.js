import { Schema, model } from "mongoose";
const postSchema = new Schema({
    message: {type: String, required: true},
    createdOn: {type: Number, required: true, default: Date.now}
})
export const Post = model("testpost", postSchema)
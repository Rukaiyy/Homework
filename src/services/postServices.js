import { Post } from "../models/postModel.js";

export const saveMessages = async (message) => {
    try {
        const newMessage = new Post({message});
        const result = await newMessage.save();
        return result;
    } catch (error) {
        throw error;
    }
}
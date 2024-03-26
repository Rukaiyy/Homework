import { Post } from "../models/postModel.js";
export const getHomePage = async(req, res) => {
    return res.status(200).json({"message": "Mee here at homepage"});
}
export const saveMessage = async(req, res) => {
    try {
        const {message} = req.body;
        const newMessage = new Post({message});
        const result = await newMessage.save();
        if(!result){
           return res.status(400).json({"result": "FAILED","data": "","error":"Error aa gya to save the message"});
        }
        return res.status(201).json({"result":"SUCCESS","data":result,"message": "Successfully saved"});
    } catch (error) {
        return res.status(400).json({"result": "FAILED","data": "","error":`${error.message}`});
    }
}

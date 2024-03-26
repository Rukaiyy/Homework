import express from "express";
import { getHomePage, saveMessage} from "../controller/postController.js";
const router = express.Router();
router.get("/home", getHomePage);
router.post("/message", saveMessage);
export default router;
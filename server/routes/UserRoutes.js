import express from "express";

const router = express.Router();
import { addToLikedMovies } from "../controller/Controller.js";
import { removeFromLikedMovies } from "../controller/Controller.js";
import { getLikedMovies } from "../controller/Controller.js";

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

export default router;

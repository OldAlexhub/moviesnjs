import Router from "express";
import searchMovies from "../controllers/searchMovies.js";

const router = Router();

router.post("/searchMovies", searchMovies);

export default router;

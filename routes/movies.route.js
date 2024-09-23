import express from "express";
import {
  movieCreate,
  movieDelete,
  movieRead,
  movieUpdate,
} from "../controllers/movies.controller.js";

const router = express();
// R - For read movies
router.get("/", movieRead);

// C - For create movie
router.post("/", movieCreate);

// U - For Update movie
router.put("/:movieId", movieUpdate);

// D - For delete movie
router.delete("/:movieId", movieDelete);

export default router;

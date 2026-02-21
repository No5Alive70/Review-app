import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
    const page = req.query.page || 1;

    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.TMDB_KEY}&page=${page}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "TMDB fetch failed" });
    }
});

router.get("/search", async (req, res) => {
    const query = req.query.q;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "TMDB search failed" });
    }
});

export default router;

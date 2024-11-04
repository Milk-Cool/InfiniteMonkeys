import express from "express";
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { genText } from "./index.js";

const app = express();
app.use(express.static(path.join(import.meta.dirname, "public")));

const index = fs.readFileSync(path.join(import.meta.dirname, "index.ejs"), "utf-8");

app.get("/", (req, res) => {
    const n = 500;
    const seed = "t" in req.query
        ? parseInt(req.query.t)
        : null;
    const text = genText(n, seed);

    res.status(200)
        .send(ejs.render(index, { text, seed }));
});

app.listen(7196);
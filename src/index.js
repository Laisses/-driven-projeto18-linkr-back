import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"
import hashtagRouters from "./routes/hashtag.routes.js";
import { likesRouter } from "./routes/likes.routes.js";
import { postsRouter } from "./routes/posts.routes.js";

dotenv.config();
const app = express();

//Configs
app.use(express.json());
app.use(cors());
app.use(hashtagRouters);
app.use(likesRouter);
app.use(userRoutes);
app.use(postsRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`Está rodando na porta ${port}!`));
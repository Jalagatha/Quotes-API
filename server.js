import express from "express";
import cors from "cors";
import authorRouter from "./routes/authorRouter.js";
import morgan from "morgan";
import { StatusCodes } from "http-status-codes";
import quotesRouter from "./routes/quotesRouter.js";

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: "GET,PATCH,POST,DELETE,PUT",
    credentials: true,
  })
);

//ROUTES
app.use("/api/author", authorRouter);
app.use("/api/quote", quotesRouter);
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Welcome to the Quotes API" });
});

export default app;

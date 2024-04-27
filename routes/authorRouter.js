import { Router } from "express";
import {isAdmin} from "../utils/acces-levels.js"
import {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  loginAuthor,
} from "../controllers/authors.js";
import { validate, authorSchema } from "../utils/data-validator.js";
import{verifyToken}  from "../utils/token.js";
const authorRouter = Router();
authorRouter.get("/", [verifyToken, isAdmin], getAllAuthors);
authorRouter.post("/login", loginAuthor);
//signUP
authorRouter.post("/signUp", validate(authorSchema), createAuthor);
authorRouter.delete("/:id", deleteAuthor);
authorRouter.get("/:id", getAuthor);
authorRouter.patch("/:id", updateAuthor);
export default authorRouter;

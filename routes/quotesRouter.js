import { Router } from "express";
import {getQuote,
    deleteQuote,
    getQuotes,
    createQuote,
    updateQuote} from "../controllers/quotes.js";
import { validate, quotesSchema } from "../utils/data-validator.js";


const quoteRouter = Router();

quoteRouter.get("/", getQuotes);
quoteRouter.get("/:id",getQuote);

quoteRouter.post("/",validate(quotesSchema), createQuote);

quoteRouter.patch("/:id", updateQuote);

quoteRouter.delete("/:id", deleteQuote);


export default quoteRouter;
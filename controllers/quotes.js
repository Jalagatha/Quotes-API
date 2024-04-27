import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

//get quote by id
const getQuote = async (req, res) => {
  try {
    const id = +req.params.id;
    const quote = await prisma.quote.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
    res.status(StatusCodes.CREATED).json({
      message: "Quote got successfully",
      quote: quote,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Can't get quote!" });
  }
};
//delete quote
const deleteQuote = async (req, res) => {
  try {
    const id = +req.params.id;
    const deletedQuote = await prisma.quote.delete({
      where: {
        id,
      },
    });
    res.status(StatusCodes.CREATED).json({
      message: "Quote Deleted successfully",
      quote: deletedQuote,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Quote not deleted" });
  }
};
//get  quotes
const getQuotes = async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany({
      include: {
        author: true,
      },
    });
    res.status(StatusCodes.CREATED).json({ message: "Success ", quotes });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "No Matching Quotes Found", err: err });
  }
};
//create a quote
const createQuote = async (req, res) => {
  try {
    const newQuote = await prisma.quote.create({
      data: {
        ...req.body,
        authorId: +req.body.authorId,
      },
      include: {
        author: true,
      },
    });

    res.status(StatusCodes.CREATED).json({
      message: "Quote created",
      "new Quote": newQuote,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Try Again" });
  }
};
//Quote Update
const updateQuote = async (req, res) => {
  try {
    const id = +req.params.id;
    const updated = await prisma.quote.update({
      where: {
        id,
      },
      data: {
        ...req.body,
        authorId: +req.body.authorId,
      },
      include: {
        author: true,
      },
    });
    res
      .status(StatusCodes.CREATED)
      .json({ message: "Quote updated Successfully", quote: updated });
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Failure Please, Try Again" });
  }
};

//exports endpoints
export{
  getQuote,
  deleteQuote,
  getQuotes,
  createQuote,
  updateQuote,
};

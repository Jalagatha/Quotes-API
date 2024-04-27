import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import {createToken} from "../utils/token.js";


const prisma = new PrismaClient();
//all authors

const getAllAuthors = async (req, res) => {
  
  try {
    const authors = await prisma.author.findMany({
      
    })
    res.status(StatusCodes.OK).json(authors);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Error No Results Found", error });
  }
};
//get author by id
const getAuthor = async (req, res) => {
  try {
    const id = +req.params.id;

    const author = await prisma.author.findUnique({
      where: {
        id
      },
    });
    res.json({
      message: "Author got Successfully",
      author: author,
    });
  } catch (err) {
    res.json({ message: "id doesn't exist" });
  }
};
//create Author
const createAuthor = async (req, res) => {
  try {
    const { email } = req.body;

    const author = await prisma.author.findUnique({
      where: {
        email
      },
    });

    if (author != null && author.email === email) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Author with email already exists" });
    } else {
      let hash = await bcrypt.hash(req.body.password, 10);
 
      const registerAuthor = await prisma.author.create({
        data: { ...req.body, age: +req.body.age, password: hash },
      });

      res
        .status(StatusCodes.CREATED)
        .json({ message: "User registered Successfully", registerAuthor });
    }
  } catch (err) {
    res.json({ message: "author not added!" });
  }
}
//login Author with email and password
const loginAuthor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const author = await prisma.author.findUnique({
      where: {
        email:email
      },
    })

    const verifyPassword = bcrypt.compareSync(password, author.password);

    if (verifyPassword) {
      let data = {
        authorId: author.id,
        authorName: author.name,
        authorRole: author.role,
      }
      let token = createToken(data);
//       const token=jwt.sign({data},$`{JWT_SECRET}`,{expiresIn:'24h'});
// res.json({token})
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Author LoggedIn",token });
    }
  } catch (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Password or Email entered is incorrect. Login again" });
  }
}
//update Author
const updateAuthor = async (req, res) => {
  try {
    const id = +req.params.id;
    const updatedAuthor = await prisma.author.update({
      where: {
        id
      },
      data: {
        ...req.body,
        age: +req.body.age,
      },
    });
    res.json({ message: "Author has been updated", data: updatedAuthor });
  } catch (err) {
    res.json({ message: "author not updated" });
  }
};
//delete author

const deleteAuthor = async (req, res) => {
  const id = +req.params.id;

  try {
    const deleteAuthor = await prisma.author.delete({
      where: {
        id
      },
    });
    res.json({ message: "Author Record Deleted", data: deleteAuthor });
  } catch (err) {
    res.json({ message: "Cannot  Not Deleted", data: err });
  }
};

export {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  loginAuthor,
};

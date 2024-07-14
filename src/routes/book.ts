import express from "express";
import {
  addBook,
  searchBooks,
  updateBook,
  deleteBook,
  getBooks,
} from "@/controllers/books";

export const bookRouter = express.Router();

bookRouter.post("/books/add", addBook);
bookRouter.get("/books/search", searchBooks);
bookRouter.route("/book/:id").put(updateBook).delete(deleteBook);
bookRouter.get("/books", getBooks);

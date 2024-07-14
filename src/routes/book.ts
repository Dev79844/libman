import express from "express";
import {
  addBook,
  searchBooks,
  updateBook,
  deleteBook,
  getBooks,
} from "@/controllers/books";

import { auth, checkRole } from "@/middleware/auth";

export const bookRouter = express.Router();

bookRouter.post("/books/add", auth, checkRole(["admin", "librarian"]), addBook);
bookRouter.get("/books/search", searchBooks);
bookRouter
  .route("/book/:id")
  .put(auth, checkRole(["admin", "librarian"]), updateBook)
  .delete(auth, checkRole(["admin", "librarian"]), deleteBook);
bookRouter.get("/books", getBooks);

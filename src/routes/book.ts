import express from "express";
import { addBook } from "@/controllers/books";

export const bookRouter = express.Router();

bookRouter.post("/books/add", addBook);

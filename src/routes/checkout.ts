import express from "express";
import { checkout, returnBook } from "@/controllers/checkout";

export const checkoutRouter = express.Router();

checkoutRouter.post("/checkout/add", checkout);
checkoutRouter.post("/checkout/return", returnBook);

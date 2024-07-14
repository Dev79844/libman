import express from "express";
import { checkout } from "@/controllers/checkout";

export const checkoutRouter = express.Router();

checkoutRouter.post("/checkout/add", checkout);

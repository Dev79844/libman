import db from "@/db";
import { Response, Request } from "express";

export const checkout = async (req: Request, res: Response) => {
  try {
    const { user_id, book_id, checkout_date, due_date } = req.body;

    const parsedCheckoutDate = new Date(checkout_date);
    const parseDueDate = new Date(due_date);

    const result = await db.$transaction(async (db) => {
      let checkout = await db.checkouts.findFirst({
        where: {
          user_id: parseInt(user_id),
        },
      });

      if (!checkout) {
        checkout = await db.checkouts.create({
          data: {
            user_id: parseInt(user_id),
          },
        });
      }

      const existingBook = await db.checkout_items.findFirst({
        where: {
          checkout_id: checkout.id,
          book_id: parseInt(book_id),
        },
      });

      if (existingBook) {
        return res.status(400).json("book already in checkout");
      }

      await db.checkout_items.create({
        data: {
          book_id: parseInt(book_id),
          checkout_id: checkout.id,
          checkout_date: parsedCheckoutDate,
          due_date: parseDueDate,
          status: "borrowed", // borrowed, returned, overdue
        },
      });

      await db.books.update({
        where: {
          id: parseInt(book_id),
        },
        data: {
          available_quantity: {
            decrement: 1,
          },
        },
      });

      return true;
    });

    return res.status(200).json("added to checkout");
  } catch (error) {
    console.error(error);
    return res.status(500).json("internal server error");
  }
};

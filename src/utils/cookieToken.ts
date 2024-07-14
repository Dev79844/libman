import { users } from "@prisma/client";
import { Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET, COOKIE_TIME } from "@/config/constants";

export const cookieToken = (user: users, res: Response) => {
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1d",
  });

  const options = {
    expires: new Date(Date.now() + parseInt(COOKIE_TIME) * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(200).cookie("jwt", token, options).json({
    message: "Ok",
    token,
    role: user.role,
  });
};

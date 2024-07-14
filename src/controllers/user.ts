import db from "@/db";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { cookieToken } from "@/utils/cookieToken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, mobile } = req.body;

    const existingUser = await db.users.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    let encPassword = await bcrypt.hash(password, 10);

    const user = await db.users.create({
      data: {
        name: fullName,
        email,
        password: encPassword,
        mobile,
      },
    });

    cookieToken(user, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send("email or password invalid");
  }

  const user = await db.users.findFirst({
    where: { email: email },
  });

  if (!user) return res.status(404).json({ message: "user not found" });

  if (user.password) {
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword)
      return res.status(400).json({ message: "email of password invalid" });
  }

  cookieToken(user, res);
};

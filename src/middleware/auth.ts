import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/config/constants";

interface DecodedJWT {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedJWT;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.headers["authorization"]?.split(" ")[1] || req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as DecodedJWT;
      req.user = decoded;
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid token" });
      } else if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: "Token expired" });
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
      return next(new Error("Unauthorized access: User not authenticated"));
    }
    if (!roles.includes(req.user?.role)) {
      return next(Error("Unauthorized access: Insufficient permissions"));
    }
    next();
  };
};

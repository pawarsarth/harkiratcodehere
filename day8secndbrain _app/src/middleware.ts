import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET='3rnrj3rj3rn' // move this to .env in real projects

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["token"] as string;

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decoded = jwt.verify(token.trim(), JWT_SECRET) as { id: string };
    console.log("Decoded:", decoded);

    //@ts-ignore
    req.userId = decoded.id;
    next();
  } catch (e) {
    console.error("JWT verification error:", e);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

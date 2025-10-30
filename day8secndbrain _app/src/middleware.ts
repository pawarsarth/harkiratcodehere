import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "3rnrj3rj3rn"; // move this to .env in real projects

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    // 🧠 1️⃣ Get token from headers (standard is 'authorization')
    const token = req.headers["token"] as string | undefined;

    if (!token) {
      return res.status(401).json({
        message: "Token missing",
      });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    // 🧩 3️⃣ Attach user ID to request (optional, for next middleware)
    //@ts-ignore
   req.userId = decoded.id;

    // ✅ 4️⃣ Continue to next handler
    next();
}
catch(e)
{
        res.json({
            message:"not logged in "
        })
}
}
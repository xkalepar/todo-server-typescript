import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos"; // Route connected
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT: number = process.env.PORT || 10000;

const app = express();

app.use(json());
app.use("/todos", todoRoutes); // This means all route path preceed this path

// Below route is trigerred when any error is is thrown
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

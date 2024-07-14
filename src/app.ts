import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cors from "cors";
import { userRouter } from "./routes/user";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(
  fileUpload({
    tempFileDir: "/tmp/",
    useTempFiles: true,
  }),
);

app.use("/api/v1", userRouter);
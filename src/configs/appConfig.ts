import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";

export const appConfig = (app: Application) => {
  dotenv.config();
  app.use(
    "/socket.io",
    express.static(
      path.join(__dirname, "node_modules", "socket.io", "client-dist")
    )
  );
  app.use(express.static("public"));
  app.use(express.json());
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
  app.use(
    cors({
      credentials: true,
      origin: "*",
    })
  );
  app.use(morgan("common"));
};

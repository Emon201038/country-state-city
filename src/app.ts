import express from "express";
import corse from "cors";
import morgan from "morgan";

import router from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
import { envVars } from "./app/config/env";

const app = express();

// middleware

app.use(
  corse({
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use("/api/v1", router);

// health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Country State City api is working.",
  });
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;

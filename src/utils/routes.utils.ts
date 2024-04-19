import express, { RequestHandler } from "express";
import { EndpointType } from "@/types/routes.types";

export const createEndpoints = (
  prefix: string,
  endpoints: EndpointType[]
): express.Router => {
  const router = express.Router();

  endpoints.forEach(({ path, method, controller, middleware }) => {
    const middlewares: RequestHandler[] = Array.isArray(middleware)
      ? middleware
      : [];
    if (typeof router[method] === "function") {
      router[method](path, ...middlewares, controller);
    } else {
      console.warn(`Invalid method '${method}' for path '${path}'.`);
    }
  });

  return router;
};

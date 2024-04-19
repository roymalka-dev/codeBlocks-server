import { Application } from "express";
import { RouteType } from "../types/routes.types";
import { createEndpoints } from "../utils/routes.utils";

export const router = (
  prefix: string,
  app: Application,
  routes: RouteType[]
) => {
  try {
    routes.forEach((route) => {
      const fullPath = `/${prefix}${route.path}`;
      app.use(
        fullPath,
        ...route.middleware,
        createEndpoints(route.path, route.endpoints)
      );
    });
  } catch (error) {
    console.error(error);
  }
};

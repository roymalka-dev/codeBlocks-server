import { RouteType } from "@/types/routes.types";
import { blockEndpoints } from "./endpoints";

export const routes: RouteType[] = [
  {
    name: "block",
    path: "/block",
    endpoints: blockEndpoints,
    middleware: [],
  },
];

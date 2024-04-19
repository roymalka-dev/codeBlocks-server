import { RequestHandler } from "express";

export type EndpointType = {
  name: string;
  path: string;
  method: "get" | "post" | "put" | "delete";
  controller: RequestHandler;
  middleware?: RequestHandler[];
};

export type RouteType = {
  name: string;
  path: string;
  endpoints: EndpointType[];
  middleware: RequestHandler[];
};

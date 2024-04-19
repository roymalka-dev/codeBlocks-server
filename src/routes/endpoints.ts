import { blockControllers } from "../controllers/blockControllers";
import { EndpointType } from "../types/routes.types";

export const blockEndpoints: EndpointType[] = [
  {
    name: "get block",
    method: "get",
    path: "/get-block/:id",
    controller: blockControllers.getBlock,
    middleware: [],
  },
  {
    name: "update block",
    method: "post",
    path: "/update-block/:id",
    controller: blockControllers.updateBlock,
    middleware: [],
  },
  {
    name: "get all blocks",
    method: "get",
    path: "/get-all-blocks",
    controller: blockControllers.getAllBlocks,
    middleware: [],
  },
];

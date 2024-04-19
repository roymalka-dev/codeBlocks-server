import { dbServices } from "../services/db.services";
import { Request, Response } from "express";
export const blockControllers = {
  getBlock: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const block = await dbServices.getBlock(id);

      if (!block) {
        return res.status(404).json({ message: "Block not found" });
      }

      return res.status(200).json({ block });
    } catch (err) {}
  },
  updateBlock: async (req: Request, res: Response) => {
    try {
      const { code } = req.body;
      const id = req.params.id;

      //console.log("Data received to update controller:", req.body, code);

      console.log("Data received to update controller:", id, code);

      await dbServices.updateBlock(id, code);
      return res.status(200).json({ message: "Block updated" });
    } catch (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  getAllBlocks: async (req: Request, res: Response) => {
    try {
      const blocks = await dbServices.getAllBlocks();
      return res.status(200).json({ blocks });
    } catch (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

import { get } from "http";
import Block from "../models/blockModel";

export const dbServices = {
  updateBlock: async (id: string, code: string) => {
    console.log("Data received to update sericce:", id, code);
    try {
      await Block.findByIdAndUpdate(id, { code: code });
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  },
  getBlock: async (id: string) => {
    try {
      const block = await Block.findById(id);
      return block;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  },
  getAllBlocks: async () => {
    try {
      const blocks = await Block.find();
      return blocks;
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  },
};

import Block from "../models/blockModel";

export const dbServices = {
  updateBlock: async (id: string, code: string) => {
    try {
      await Block.findByIdAndUpdate(id, { code: code });
    } catch (err) {
      throw err;
    }
  },
  getBlock: async (id: string) => {
    try {
      const block = await Block.findById(id);
      return block;
    } catch (err) {
      throw err;
    }
  },
  getAllBlocks: async () => {
    try {
      const blocks = await Block.find();
      return blocks;
    } catch (err) {
      throw err;
    }
  },
};

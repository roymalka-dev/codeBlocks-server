import mongoose from "mongoose";

const blockSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A block must have a title"],
      trim: true,
    },
    code: {
      type: String,
    },
    solution: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Block = mongoose.model("Block", blockSchema);

export default Block;

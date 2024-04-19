import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "", {});
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

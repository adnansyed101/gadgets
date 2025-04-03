import mongoose, { Schema, Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  description: string;
}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICategory>("Category", CategorySchema);

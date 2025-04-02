import mongoose, { Schema, Document, Types } from "mongoose";

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: Types.ObjectId;
  seller: Types.ObjectId;
  images: { url: string; altText: string }[];
  createdAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Dummy amounts
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true, // Only sellers can list products
  },
  images: [
    {
      url: String,
      altText: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IProduct>("Product", ProductSchema);

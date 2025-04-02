import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "seller" | "admin";
  phone?: string;
  address?: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  totalEarnings: number;
  pendingEarnings: number;
  paidEarnings: number;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true, // Hashed password (use bcrypt)
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin"],
    default: "customer",
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    country: String,
    postalCode: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // New fields for sellers
  totalEarnings: {
    type: Number,
    default: 0, // Total earnings accumulated (dummy amounts)
  },
  pendingEarnings: {
    type: Number,
    default: 0, // Earnings not yet paid out
  },
  paidEarnings: {
    type: Number,
    default: 0, // Earnings already paid out
  },
  isActive: {
    type: Boolean,
    default: true, // For soft deletion or account suspension
  },
});

export default mongoose.model<IUser>("User", UserSchema);

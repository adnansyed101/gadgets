import User from "./User";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  seller: User;
  images: { url: string; altText: string }[];
  createdAt: Date;
};

export default Product;

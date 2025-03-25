import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card
      key={product.id}
      className="hover:shadow-lg transition-shadow flex flex-col justify-between h-full p-1 bg-black"
    >
      <div className="bg-white rounded-md py-4">
        <div>
          <CardContent className="flex justify-center">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="h-40 object-contain rounded-md"
              />
            </figure>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
            <CardDescription>${product.price}</CardDescription>
          </CardHeader>
        </div>
        <CardFooter>
          <Link href={`/product/${product._id}`}>
            <Button variant="link" className="px-0">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;

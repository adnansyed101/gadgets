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
      className="hover:shadow-lg transition-shadow flex flex-col justify-between h-full "
    >
      <div>
        <CardHeader>
          <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
          <CardDescription>${product.price}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <figure>
            <img
              src={product.image}
              alt={product.name}
              className="h-40 object-contain"
            />
          </figure>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between items-center">
        <Link href={`/product/${product._id}`}>
          <Button variant="link">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

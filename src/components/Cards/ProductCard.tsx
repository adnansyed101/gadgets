import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Product from "@/types/Product";

const ProductCard = ({ product }: { product: Product }) => {
  const { stock, _id } = product;
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 py-0 gap-2">
      {/* Product Image */}
      <CardHeader className="p-0">
        <Link href={`/products/${_id}`}>
          <div className="relative w-full h-48">
            <Image
              src={product.images[0].url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </Link>
      </CardHeader>

      {/* Product Details */}
      <CardContent className="">
        <Link href={`/products/${_id}`}>
          <h3 className="text-lg font-semibold text-gray-900 truncate hover:text-blue-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          Sold by: {product.seller?.name || "Adnan"}
        </p>
        <p className="text-xl font-bold text-gray-800 mt-2">
          ${product.price.toFixed(2)}
        </p>
        <p
          className={`text-sm mt-1 ${
            stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </p>
      </CardContent>

      {/* Action Button */}
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          disabled={stock === 0}
          variant={stock > 0 ? "default" : "secondary"}
          asChild={stock > 0} // Wraps the button in a Link if in stock
        >
          {stock > 0 ? (
            <Link href={`/checkout/${_id}`}>Buy Now</Link>
          ) : (
            <span>Buy Now</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

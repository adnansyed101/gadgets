import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

const ProductCard = () => {
  const stock = 0;
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 py-0 gap-2">
      {/* Product Image */}
      <CardHeader className="p-0">
        <Link href={`/`}>
          <div className="relative w-full h-48">
            <Image
              src="/dummy-image.jpg"
              alt="Laptop"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </Link>
      </CardHeader>

      {/* Product Details */}
      <CardContent className="px-2">
        <Link href={`/`}>
          <h3 className="text-lg font-semibold text-gray-900 truncate hover:text-blue-600">
            Asus Rog Scar
          </h3>
        </Link>
        <p className="text-xl font-bold text-gray-800 mt-2">$1200</p>
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
          {stock > 0 ? <Link href={`/`}>Buy Now</Link> : <span>Buy Now</span>}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

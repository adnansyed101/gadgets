import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ProductCard = () => {
  const stock = 0;
  return (
    <Card className="p-0">
      {/* Product Image */}
      <CardHeader className="p-2">
        <Image
          src={"/dummy-image.jpg"}
          alt="Laptop"
          height={0}
          width={0}
          className="w-full h-full"
          unoptimized
        />
      </CardHeader>

      {/* Product Details */}
      <CardContent className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 truncate hover:text-blue-600">
          Asus Rog Scar
        </h3>

        <p className="text-xl font-bold text-gray-800 mt-2">$1200</p>
      </CardContent>

      <Separator />

      {/* Action Button */}
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="space-x-2">
          <Button
            disabled={stock === 0}
            variant={stock > 0 ? "default" : "secondary"}
            asChild={stock > 0} // Wraps the button in a Link if in stock
          >
            {stock > 0 ? <Link href={`/`}>Buy Now</Link> : <span>Buy Now</span>}
          </Button>
          <Button
            disabled={stock === 0}
            variant={stock > 0 ? "default" : "secondary"}
            asChild={stock > 0} // Wraps the button in a Link if in stock
          >
            {stock > 0 ? (
              <Link href={`/`}>Add to Cart</Link>
            ) : (
              <span>Add to Cart</span>
            )}
          </Button>
        </div>
        <p
          className={`text-sm mt-1 ${
            stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

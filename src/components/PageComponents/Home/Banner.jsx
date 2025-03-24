import { Button } from "@/components/ui/button";
import React from "react";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Explore the Future of Fashion
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover cutting-edge dresses that elevate your lifestyle.
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="bg-purple-600">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

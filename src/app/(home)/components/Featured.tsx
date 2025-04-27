import React from "react";
import ProductCard from "./ProductCard";

const Featured = () => {
  return (
    <section className="py-24 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="scroll-m-20 text-4xl font-semibold mb-2">
          &mdash; Featured Gadgets &mdash;
        </h2>
        <p className="leading-7 font-light text-xl">Our Best Sellers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Featured;

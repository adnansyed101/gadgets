import React from "react";
import ProductCard from "./ProductCard";

const Featured = () => {
  return (
    <section className="mt-30 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors mb-2">
          Featured Gadgets
        </h2>
        <p className="leading-7 font-light">Our Best Sellers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Featured;

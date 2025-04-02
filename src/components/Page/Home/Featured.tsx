import React from "react";

const Featured = () => {
  return (
    <section className="mt-10 container mx-auto">
      <div className="text-center">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors mb-2">
          Featured Gadgets
        </h2>
        <p className="leading-7 font-light">Our Best Sellers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2"></div>
    </section>
  );
};

export default Featured;

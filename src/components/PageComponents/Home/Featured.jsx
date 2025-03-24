import ProductCard from "@/components/Cards/ProductCard";
import React from "react";

const Featured = () => {
  const product = {
    _id: "1",
    name: "Casual T-Shirt",
    description: "100% cotton, comfortable fit.",
    price: 25.99,
    category: "T-Shirts",
    brand: "BrandName",
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Black"],
    stock: 50,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    vendorId: "vendor_id_1",
    createdAt: "2025-03-24T12:00:00Z",
    updatedAt: "2025-03-24T12:00:00Z",
  };

  return (
    <section className="mt-10 container mx-auto">
      <div className="text-center">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors mb-2">
          Featured Clothes
        </h2>
        <p className="leading-7 font-light">Our Best Sellers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </section>
  );
};

export default Featured;

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  MousePointerClick,
} from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    href: "/category/smartphones",
  },
  {
    name: "Laptops",
    icon: Laptop,
    href: "/category/laptops",
  },
  {
    name: "Smartwatches",
    icon: Watch,
    href: "/category/smartwatches",
  },
  {
    name: "Audio Gear",
    icon: Headphones,
    href: "/category/audio-gear",
  },
  {
    name: "Accessories",
    icon: MousePointerClick,
    href: "/category/accessories",
  },
];

export default function Categories() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map(({ name, icon: Icon, href }) => (
          <Link key={name} href={href}>
            <Card className="group hover:shadow-lg transition duration-300 cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition" />
                <span className="font-medium text-lg">{name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

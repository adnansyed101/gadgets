import { ShieldCheck, Truck, BadgeCheck, RefreshCcw } from "lucide-react";

const reasons = [
  {
    title: "Secure Checkout",
    description: "Your payment is safe with our encrypted platform.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Get your gadgets quickly with express shipping.",
    icon: Truck,
  },
  {
    title: "Genuine Products",
    description: "100% authentic and high-quality gadgets only.",
    icon: BadgeCheck,
  },
  {
    title: "Easy Returns",
    description: "Not happy? Return within 7 days—no questions asked.",
    icon: RefreshCcw,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {reasons.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="text-center p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

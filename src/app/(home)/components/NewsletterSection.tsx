"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send email to backend or service
    console.log("Subscribed with:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-muted py-12 px-4 mt-30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter and never miss a tech deal!
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        ) : (
          <p className="text-green-600 font-medium">Thanks for subscribing!</p>
        )}
      </div>
    </section>
  );
}

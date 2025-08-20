import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import { Code, Layers, Smartphone, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | NexGen Solutions",
  description:
    "Explore our services: Web design, app development, digital marketing, and IT consulting. We deliver high-quality digital solutions tailored to your business.",
  openGraph: {
    title: "NexGen Solutions – Services",
    description:
      "Web design, app development, digital marketing, and IT consulting for businesses worldwide.",
    url: "https://nexgen-solutions.com/services",
    images: ["/og-services.png"]
  }
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-app">
        <SectionTitle title="Our Services" description="From design to deployment, we help you ship great products." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Code />}
            title="Web Development"
            description="Full‑stack Next.js applications focused on performance."
            cta={<Button variant="ghost" href="/contact">Get a quote</Button>}
          />
          <ServiceCard
            icon={<Layers />}
            title="Component Libraries"
            description="Scalable, accessible UI components and design systems."
            cta={<Button variant="ghost" href="/contact">Get a quote</Button>}
          />
          <ServiceCard
            icon={<Smartphone />}
            title="Responsive UI/UX"
            description="Design and implementation for all screen sizes."
            cta={<Button variant="ghost" href="/contact">Get a quote</Button>}
          />
          <ServiceCard
            icon={<Rocket />}
            title="Optimization"
            description="Core Web Vitals, caching, and Lighthouse improvements."
            cta={<Button variant="ghost" href="/contact">Get a quote</Button>}
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NexGen Solutions",
  description:
    "Learn more about NexGen Solutions, our vision, mission, and core values. A UAE-based software company providing innovative digital solutions.",
  openGraph: {
    title: "About NexGen Solutions",
    description:
      "Discover the vision, mission, and values of NexGen Solutions, a modern tech company in UAE.",
    url: "https://nexgen-solutions.com/about",
    images: ["/og-about.png"]
  }
};


export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-app">
        <SectionTitle title="About NexGen Solutions" description="We are a team of frontend engineers and designers who love building outstanding web experiences." />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="prose max-w-none">
            <p>
              Our team blends engineering rigor with design craft to deliver fast, accessible, and scalable web products.
              We specialize in React, Next.js, and Tailwind CSS.
            </p>
            <p>
              We partner with startups and enterprises to design and build high‑impact user interfaces, from
              marketing websites to dashboards and design systems.
            </p>
          </div>
          <div className="relative aspect-[16/10] card overflow-hidden">
            <Image src="/illustrations/about.svg" alt="About NexGen" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

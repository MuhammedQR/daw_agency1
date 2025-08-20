import SectionTitle from "@/components/SectionTitle";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/content/portfolio/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | NexGen Solutions",
  description:
    "Check out our portfolio of modern websites and apps built for clients across different industries in UAE and globally.",
  openGraph: {
    title: "Our Work – NexGen Solutions Portfolio",
    description:
      "Explore our portfolio of web and app projects crafted with modern technologies.",
    url: "https://nexgen-solutions.com/portfolio",
    images: ["/og-portfolio.png"]
  }
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-app">
        <SectionTitle title="Our Work" description="A gallery of selected projects." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <PortfolioCard key={p.slug} title={p.title} image={p.image} href={`/portfolio/${p.slug}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

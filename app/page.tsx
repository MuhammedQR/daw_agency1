import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import { Button } from "@/components/Button";
import Image from "next/image";
import { Code, Layers, Smartphone, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "NexGen Solutions – Modern Web & App Development",
  description:
    "We design and develop modern websites and mobile apps using React, Next.js, and Tailwind. Based in UAE, serving clients worldwide."
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="py-16">
        <div className="container-app">
          <SectionTitle
            kicker="Services"
            title="What we do"
            description="We craft fast, accessible, and scalable digital products."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Code />}
              title="Web Development"
              description="Next.js, React, Tailwind CSS for blazing-fast websites."
              cta={<Button variant="ghost" href="/services">Learn more</Button>}
            />
            <ServiceCard
              icon={<Layers />}
              title="UI Engineering"
              description="Reusable component libraries with accessibility in mind."
              cta={<Button variant="ghost" href="/services#ui">Learn more</Button>}
            />
            <ServiceCard
              icon={<Smartphone />}
              title="Responsive Design"
              description="Mobile-first layouts that look great on any device."
              cta={<Button variant="ghost" href="/services#responsive">Learn more</Button>}
            />
            <ServiceCard
              icon={<Rocket />}
              title="Performance"
              description="Core Web Vitals focused builds and optimization."
              cta={<Button variant="ghost" href="/services#perf">Learn more</Button>}
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container-app">
          <SectionTitle
            kicker="Portfolio"
            title="Selected work"
            description="A quick look at projects we’ve delivered."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <PortfolioCard key={i} title={`Project ${i}`} image={`/portfolio/p${i}.svg`} href="/portfolio" />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container-app grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle kicker="About us" title="Vision, Mission & Values" />
            <ul className="space-y-3 text-[hsl(var(--muted))]">
              <li><strong className="text-[hsl(var(--content))]">Vision:</strong> Empower businesses with modern web technology.</li>
              <li><strong className="text-[hsl(var(--content))]">Mission:</strong> Ship accessible, scalable, and delightful products.</li>
              <li><strong className="text-[hsl(var(--content))]">Values:</strong> Quality, transparency, and continuous improvement.</li>
            </ul>
            <div className="mt-6">
              <Button href="/about" variant="outline" aria-label="More about NexGen">
                Learn about us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[16/10] card overflow-hidden">
              <Image src="/illustrations/about.svg" alt="Team at work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-gray-50">
        <div className="container-app">
          <SectionTitle
            kicker="Blog"
            title="Latest articles"
            description="Insights on React, Next.js, and modern frontend."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard title="Design systems with Tailwind" image="/blog/b1.svg" href="/blog" />
            <BlogCard title="Accessibility quick wins" image="/blog/b2.svg" href="/blog" />
            <BlogCard title="Next.js performance tips" image="/blog/b3.svg" href="/blog" />
          </div>
        </div>
      </section>

      <CTA />

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container-app grid md:grid-cols-2 gap-8">
          <div>
            <SectionTitle
              kicker="Contact"
              title="Let’s talk"
              description="Tell us about your project and we’ll get back to you."
            />
            <ContactForm />
          </div>
          <aside className="space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold text-[hsl(var(--content))]">Contact info</h3>
              <ul className="mt-3 space-y-2 text-[hsl(var(--muted))]">
                <li><strong className="text-[hsl(var(--content))]">Phone:</strong> +971 50 123 4567</li>
                <li><strong className="text-[hsl(var(--content))]">Email:</strong> hello@nexgen.dev</li>
                <li><strong className="text-[hsl(var(--content))]">Location:</strong> Abu Dhabi, UAE</li>
              </ul>
            </div>
            <div className="card p-0 overflow-hidden" aria-label="Map placeholder">
              <Image src="/portfolio/p1.svg" alt="Map placeholder" width={1200} height={800} className="w-full h-auto" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

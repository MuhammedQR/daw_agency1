import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NexGen Solutions",
  description:
    "Get in touch with NexGen Solutions for web development, app design, or digital marketing inquiries. Let's build something great together.",
  openGraph: {
    title: "Contact NexGen Solutions",
    description:
      "Reach out to NexGen Solutions for project inquiries and collaborations.",
    url: "https://nexgen-solutions.com/contact",
    images: ["/og-contact.png"]
  }
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-app grid md:grid-cols-2 gap-8">
        <div>
          <SectionTitle title="Contact us" description="We’ll get back to you within 1–2 business days." />
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
            <Image src="/portfolio/p2.svg" alt="Map placeholder" width={1200} height={800} className="w-full h-auto" />
          </div>
        </aside>
      </div>
    </div>
  );
}

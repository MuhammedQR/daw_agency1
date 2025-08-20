import { Button } from "@/components/Button";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="container-app">
        <div className="card bg-brand-primary text-[hsl(var(--content))] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to kickstart your project?</h3>
            <p className="opacity-90 mt-1">Let&apos;s build something great together.</p>
          </div>
          <Button variant="cta" href="/contact" aria-label="Contact us now">Contact us</Button>
        </div>
      </div>
    </section>
  );
}

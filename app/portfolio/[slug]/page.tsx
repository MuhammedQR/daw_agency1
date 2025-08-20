import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/portfolio/projects";
import PortfolioCard from "@/components/PortfolioCard";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <article className="pt-28 pb-20">
        <div className="container-app max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--content))]">
            {project.title}
          </h1>
          <div className="relative mt-6 aspect-[4/1] card overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-[hsl(var(--muted))]">{project.summary}</p>
          <div className="prose max-w-none mt-6">
            <p>{project.body}</p>
          </div>
        </div>
      </article>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div key={i} variants={fadeInUp}>
            <PortfolioCard
              title={`Project ${i}`}
              image={`/portfolio/p${i}.svg`}
              href="/portfolio"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

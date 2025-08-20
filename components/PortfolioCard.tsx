import Image from "next/image";

export default function PortfolioCard({
  title,
  image,
  href
}: {
  title: string;
  image: string;
  href?: string;
}) {
  return (
    <a href={href || "#"} className="group card overflow-hidden block">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-[hsl(var(--content))]">{title}</h3>
        <p className="text-sm text-[hsl(var(--muted))]">Case study</p>
      </div>
    </a>
  );
}

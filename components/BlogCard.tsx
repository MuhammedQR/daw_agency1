import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  title,
  image,
  href
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="group card overflow-hidden">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-[hsl(var(--content))] group-hover:text-brand-primary">{title}</h3>
        <p className="text-sm text-[hsl(var(--muted))]">Read more →</p>
      </div>
    </Link>
  );
}

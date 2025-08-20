import { ReactNode } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
  cta
}: {
  icon: ReactNode;
  title: string;
  description: string;
  cta?: ReactNode;
}) {
  return (
    <article className="card p-6 h-full">
      <div className="h-12 w-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[hsl(var(--content))]">{title}</h3>
      <p className="mt-2 text-sm text-[hsl(var(--muted))]">{description}</p>
      {cta ? <div className="mt-4">{cta}</div> : null}
    </article>
  );
}

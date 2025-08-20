import { ReactNode } from "react";

export default function SectionTitle({
  kicker,
  title,
  description
}: {
  kicker?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {kicker ? (
        <div className="text-brand-cta text-xs font-semibold uppercase tracking-widest mb-2">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--content))] mb-3">
        {title}
      </h2>
      {description ? (
        <p className="text-[hsl(var(--muted))]">{description}</p>
      ) : null}
    </div>
  );
}

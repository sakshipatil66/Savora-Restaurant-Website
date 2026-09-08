import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export function TestimonialCard({ item, delay = 0 }: { item: Testimonial; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="border border-border bg-card p-8">
      <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-5 font-display text-lg leading-relaxed text-foreground italic">
        “{item.quote}”
      </p>
      <p className="mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-foreground">{item.name}</p>
      <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
    </Reveal>
  );
}

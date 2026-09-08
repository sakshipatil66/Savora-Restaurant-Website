import { Leaf } from "lucide-react";

export type MenuEntry = {
  name: string;
  description: string;
  price: string;
  veg?: boolean;
  image?: string;
};

export function MenuItem({ item, delay = 0 }: { item: MenuEntry; delay?: number }) {
  return (
    <article
      style={{ animationDelay: `${delay}ms` }}
      className="menu-card group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]"
    >
      {item.image ? (
        <div className="overflow-hidden bg-muted">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            width={800}
            height={600}
            className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-2 font-display text-xl text-foreground transition-colors duration-300 group-hover:text-gold">
            <span className="break-words">{item.name}</span>
            {item.veg ? (
              <Leaf size={14} className="shrink-0 text-gold" aria-label="Vegetarian" />
            ) : null}
          </h3>
          <span className="shrink-0 text-sm tracking-wide text-gold transition-transform duration-300 group-hover:scale-110">
            {item.price}
          </span>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </article>
  );
}

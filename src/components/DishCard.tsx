import { Reveal } from "./Reveal";

export type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export function DishCard({ dish, delay = 0 }: { dish: Dish; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div className="overflow-hidden bg-muted">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-gold">
          {dish.name}
        </h3>
        <span className="text-sm tracking-wide text-gold">{dish.price}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
    </Reveal>
  );
}

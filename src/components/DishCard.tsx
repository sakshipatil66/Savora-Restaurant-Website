
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export function DishCard({
  dish,
  delay = 0,
}: {
  dish: Dish;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-[#c9a45c]/30
        bg-[#211b15]
        shadow-[0_12px_35px_rgba(45,35,20,0.18)]
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]

        /* Desktop */
        hover:-translate-y-5
        hover:scale-[1.025]
        hover:border-[#c9a45c]
        hover:shadow-[0_30px_65px_rgba(45,35,20,0.30)]

        /* Mobile / Touch */
        active:-translate-y-2
        active:scale-[1.015]
        active:border-[#c9a45c]
        active:shadow-[0_20px_45px_rgba(45,35,20,0.28)]
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="
            aspect-[4/3]
            w-full
            object-cover
            transition-all
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:scale-110
            group-active:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/85
            via-black/20
            to-transparent
            opacity-60
            transition-all
            duration-700

            group-hover:opacity-90
            group-active:opacity-85
          "
        />

        {/* PRICE */}
        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            border
            border-[#d6ad63]
            bg-[#c9a45c]
            px-4
            py-2
            text-sm
            font-semibold
            tracking-wide
            text-white
            shadow-lg
            transition-all
            duration-500

            group-hover:-translate-y-1
            group-hover:scale-110
            group-hover:bg-[#fffdf8]
            group-hover:text-[#8c6427]

            group-active:-translate-y-1
            group-active:scale-105
            group-active:bg-[#fffdf8]
            group-active:text-[#8c6427]
          "
        >
          {dish.price}
        </div>

        {/* ARROW */}
        <button
          type="button"
          aria-label={`Explore ${dish.name}`}
          className="
            absolute
            bottom-5
            right-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#c9a45c]
            text-white
            opacity-0
            translate-y-5
            scale-75
            shadow-xl
            transition-all
            duration-500
            ease-out

            group-hover:translate-y-0
            group-hover:scale-100
            group-hover:opacity-100

            group-active:translate-y-0
            group-active:scale-100
            group-active:opacity-100

            hover:scale-110
            hover:bg-[#9b712f]
          "
        >
          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
              group-active:translate-x-1
            "
          />
        </button>

        {/* SHINE */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-full
            w-1/2
            skew-x-[-20deg]
            bg-white/15
            transition-all
            duration-1000

            group-hover:left-[140%]
            group-active:left-[140%]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          bg-[#211b15]
          px-6
          py-7
          transition-all
          duration-500

          group-hover:bg-[#2b221a]
          group-active:bg-[#2b221a]
        "
      >
        <div
          className="
            absolute
            left-6
            top-0
            h-[3px]
            w-0
            rounded-full
            bg-[#c9a45c]
            transition-all
            duration-700
            ease-out

            group-hover:w-20
            group-active:w-16
          "
        />

        <h3
          className="
            font-display
            text-xl
            font-semibold
            leading-tight
            text-[#fff8ec]
            transition-all
            duration-500
            ease-out

            group-hover:translate-x-2
            group-hover:text-[#d6ad63]

            group-active:translate-x-1
            group-active:text-[#d6ad63]
          "
        >
          {dish.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#c8bca9]">
          {dish.description}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span
            className="
              h-px
              w-7
              bg-[#c9a45c]
              transition-all
              duration-500

              group-hover:w-12
              group-active:w-10
            "
          />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#c9a45c]">
            SAVORA
          </span>
        </div>
      </div>
    </Reveal>
  );
}


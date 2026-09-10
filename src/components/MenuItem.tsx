import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export type MenuEntry = {
  name: string;
  description: string;
  price: string;
  image: string;
  veg?: boolean;
};

export function MenuItem({
  item,
  delay = 0,
}: {
  item: MenuEntry;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="
        group relative h-full overflow-hidden rounded-2xl
        border border-[#c9a45c]/25 bg-[#fffdf8]
        shadow-[0_8px_25px_rgba(45,35,20,0.08)]
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-4 hover:scale-[1.02]
        hover:border-[#c9a45c]
        hover:shadow-[0_25px_55px_rgba(45,35,20,0.20)]
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="
            aspect-[4/3] w-full object-cover
            transition-all duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-110
          "
        />

        {/* IMAGE OVERLAY */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/75 via-black/15 to-transparent
          opacity-50 transition-all duration-700
          group-hover:opacity-90
        " />

        {/* PRICE */}
        <div className="
          absolute right-4 top-4
          rounded-full border border-[#d6ad63]
          bg-[#fffdf8] px-4 py-2
          text-sm font-semibold tracking-wide text-[#8c6427]
          shadow-md transition-all duration-500
          group-hover:-translate-y-1
          group-hover:scale-110
          group-hover:bg-[#c9a45c]
          group-hover:text-white
          group-hover:shadow-lg
        ">
          {item.price}
        </div>

        {/* VEG INDICATOR */}
        {item.veg && (
          <div
            className="
              absolute bottom-4 left-4
              flex h-8 w-8 items-center justify-center
              rounded-full border border-white/40
              bg-black/60 shadow-lg backdrop-blur-sm
              transition-all duration-500
              group-hover:scale-110
              group-hover:border-green-400
            "
            title="Vegetarian"
            aria-label="Vegetarian"
          >
            <span className="
              h-3 w-3 rounded-full
              border border-green-300 bg-green-500
            " />
          </div>
        )}

        {/* ARROW BUTTON */}
        <button
          type="button"
          aria-label={`Explore ${item.name}`}
          className="
            absolute bottom-4 right-4
            flex h-11 w-11 items-center justify-center
            rounded-full bg-[#c9a45c] text-white
            opacity-0 translate-y-5 scale-75
            shadow-xl transition-all duration-500 ease-out
            group-hover:translate-y-0
            group-hover:scale-100
            group-hover:opacity-100
            hover:scale-110
            hover:bg-[#9b712f]
          "
        >
          <ArrowRight
            size={17}
            className="
              transition-transform duration-500
              group-hover:translate-x-1
            "
          />
        </button>

        {/* LIGHT SWEEP EFFECT */}
        <div className="
          pointer-events-none absolute inset-y-0
          -left-full w-1/2 skew-x-[-20deg]
          bg-white/20 transition-all duration-1000
          group-hover:left-[140%]
        " />
      </div>

      {/* CONTENT */}
      <div className="
        relative bg-[#fffdf8]
        px-6 py-6
        transition-all duration-500
        group-hover:bg-[#fffaf0]
      ">
        {/* GOLD LINE */}
        <div className="
          absolute left-6 top-0
          h-[3px] w-0 rounded-full
          bg-[#c9a45c]
          transition-all duration-700 ease-out
          group-hover:w-20
        " />

        {/* TITLE + VEG */}
        <div className="flex items-center gap-3">
          <h3 className="
            min-w-0 flex-1
            font-display text-xl font-semibold
            leading-tight text-[#2b241c]
            transition-all duration-500 ease-out
            group-hover:translate-x-1
            group-hover:text-[#9b712f]
          ">
            {item.name}
          </h3>

          {item.veg && (
            <span
              className="
                h-2.5 w-2.5 shrink-0
                rounded-full bg-green-500
                ring-2 ring-green-500/20
                transition-all duration-300
                group-hover:scale-125
              "
              aria-label="Vegetarian"
            />
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="
          mt-3 line-clamp-2
          text-sm leading-6 text-[#756b5e]
        ">
          {item.description}
        </p>

        {/* FOOTER */}
        <div className="
          mt-5 flex items-center gap-2
          transition-all duration-500
          group-hover:translate-y-1
        ">
          <span className="
            h-px w-7 bg-[#c9a45c]
            transition-all duration-500
            group-hover:w-12
          " />

          <span className="
            text-[10px] font-medium uppercase
            tracking-[0.25em] text-[#8d8274]
            transition-colors duration-300
            group-hover:text-[#9b712f]
          ">
            SAVORA
          </span>
        </div>
      </div>
    </Reveal>
  );
}

import { ArrowRight } from "lucide-react";

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
    <>
      {/* Animation styles */}
      <style>
        {`
          @keyframes savoraDishCardIn {
            from {
              opacity: 0;
              transform: translateY(35px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>

      <article
        style={{
          animationName: "savoraDishCardIn",
          animationDuration: "700ms",
          animationTimingFunction:
            "cubic-bezier(0.22, 1, 0.36, 1)",
          animationDelay: `${delay}ms`,
          animationFillMode: "both",
        }}
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
          duration-500
          ease-out

          hover:-translate-y-4
          hover:scale-[1.02]
          hover:border-[#c9a45c]
          hover:shadow-[0_25px_55px_rgba(45,35,20,0.30)]

          active:scale-[0.98]
          active:border-[#c9a45c]
          active:shadow-[0_18px_40px_rgba(45,35,20,0.25)]
        "
      >
        {/* =====================================================
            IMAGE
        ===================================================== */}

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
              transition-transform
              duration-700
              ease-out

              group-hover:scale-110
              group-active:scale-105
            "
          />

          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/20
              to-transparent
              opacity-60
              transition-opacity
              duration-500

              group-hover:opacity-90
              group-active:opacity-85
            "
          />

          {/* =================================================
              PRICE
          ================================================= */}

          <div
            className="
              absolute
              right-3
              top-3
              rounded-full
              border
              border-[#d6ad63]
              bg-[#c9a45c]
              px-3
              py-1.5
              text-xs
              font-semibold
              tracking-wide
              text-white
              shadow-lg

              transition-all
              duration-300

              sm:right-4
              sm:top-4
              sm:px-4
              sm:py-2
              sm:text-sm

              group-hover:-translate-y-1
              group-hover:scale-105
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

          {/* =================================================
              ARROW BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={`Explore ${dish.name}`}
            className="
              absolute
              bottom-4
              right-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#c9a45c]
              text-white
              opacity-0
              translate-y-3
              scale-75
              shadow-xl

              transition-all
              duration-500
              ease-out

              sm:bottom-5
              sm:right-5
              sm:h-12
              sm:w-12

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
                duration-300
                group-hover:translate-x-1
                group-active:translate-x-1
              "
            />
          </button>

          {/* =================================================
              SHINE EFFECT
          ================================================= */}

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

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            bg-[#211b15]
            px-5
            py-6

            transition-colors
            duration-500

            sm:px-6
            sm:py-7

            group-hover:bg-[#2b221a]
            group-active:bg-[#2b221a]
          "
        >
          {/* GOLD LINE */}

          <div
            className="
              absolute
              left-5
              top-0
              h-[3px]
              w-8
              rounded-full
              bg-[#c9a45c]

              transition-all
              duration-500

              sm:left-6
              sm:w-0

              group-hover:w-20
              group-active:w-16
            "
          />

          {/* TITLE */}

          <h3
            className="
              font-display
              text-lg
              font-semibold
              leading-tight
              text-[#fff8ec]

              transition-all
              duration-300

              sm:text-xl

              group-hover:translate-x-2
              group-hover:text-[#d6ad63]

              group-active:translate-x-1
              group-active:text-[#d6ad63]
            "
          >
            {dish.name}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              line-clamp-2
              text-sm
              leading-6
              text-[#c8bca9]
            "
          >
            {dish.description}
          </p>

          {/* FOOTER */}

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

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#c9a45c]
              "
            >
              SAVORA
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

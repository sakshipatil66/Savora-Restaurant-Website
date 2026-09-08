import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Food" | "Interior" | "Chef" | "Events";
};

const FILTERS = [
  "All",
  "Food",
  "Interior",
  "Chef",
  "Events",
] as const;

export function GalleryGrid({
  images,
}: {
  images: GalleryImage[];
}) {
  const [filter, setFilter] =
    useState<(typeof FILTERS)[number]>("All");

  const [active, setActive] =
    useState<GalleryImage | null>(null);

  const visibleImages =
    filter === "All"
      ? images
      : images.filter(
          (image) => image.category === filter,
        );

  useEffect(() => {
    if (!active) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {/* =========================================
          FILTER BUTTONS
          ========================================= */}
      <div className="mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max justify-center gap-3 px-1">
          {FILTERS.map((item) => {
            const isActive = filter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={isActive}
                className={cn(
                  "shrink-0 border px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.2em] transition-all duration-300",
                  isActive
                    ? "border-gold bg-gold text-accent-foreground"
                    : "border-border bg-transparent text-foreground/70 hover:-translate-y-0.5 hover:border-gold hover:text-gold",
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================
          GALLERY GRID
          ========================================= */}
      {visibleImages.length > 0 ? (
        <div
          key={filter}
          className="gallery-grid columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {visibleImages.map((image, index) => (
            <button
              key={`${image.src}-${image.alt}`}
              type="button"
              onClick={() => setActive(image)}
              className="gallery-item group relative mb-4 block w-full overflow-hidden break-inside-avoid bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="w-full p-5">
                  <span className="block text-[0.58rem] font-medium uppercase tracking-[0.22em] text-gold">
                    {image.category}
                  </span>

                  <span className="mt-2 block text-sm uppercase tracking-[0.1em] text-cream">
                    {image.alt}
                  </span>

                  <span className="mt-3 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                </span>
              </span>

              {/* View Icon */}
              <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-cream/30 bg-charcoal/40 text-xl text-cream opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                +
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="border border-border py-16 text-center">
          <p className="text-sm text-muted-foreground">
            No gallery images available.
          </p>
        </div>
      )}

      {/* =========================================
          LIGHTBOX
          ========================================= */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold sm:right-8 sm:top-8"
          >
            <X size={25} strokeWidth={1.5} />
          </button>

          {/* Image */}
          <figure
            className="gallery-lightbox relative max-h-full max-w-6xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain"
            />

            <figcaption className="mt-5 text-center">
              <p className="text-sm uppercase tracking-[0.15em] text-cream/90">
                {active.alt}
              </p>

              <p className="mt-2 text-[0.58rem] uppercase tracking-[0.22em] text-gold">
                {active.category}
              </p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
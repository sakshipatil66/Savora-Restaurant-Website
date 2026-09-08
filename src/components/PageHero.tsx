export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-charcoal pt-28 pb-12 sm:min-h-[62svh] sm:pb-16 lg:min-h-[64svh] lg:pb-20">
      {/* Background Image */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45 transition-transform duration-[1200ms] ease-out"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/35" />

      {/* Additional Mobile Contrast */}
      <div className="absolute inset-0 bg-charcoal/10 sm:bg-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p className="eyebrow hero-eyebrow">
            {eyebrow}
          </p>

          {/* Title */}
          <h1 className="hero-title mt-3 max-w-4xl text-4xl leading-[1.05] tracking-tight text-cream sm:mt-4 sm:text-5xl sm:leading-[1.06] lg:text-6xl xl:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="hero-description mt-5 max-w-2xl text-sm leading-7 text-cream/85 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {description}
          </p>

          {/* Decorative Line */}
          <div className="hero-line mt-7 h-px w-14 bg-gold sm:mt-9 sm:w-16" />

        </div>
      </div>
    </section>
  );
}
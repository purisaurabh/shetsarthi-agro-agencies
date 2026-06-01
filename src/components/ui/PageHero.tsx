"use client";

import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image,
}: Props) {
  return (
    <section
      className="relative h-[70svh] min-h-[480px] sm:h-[80svh] sm:min-h-[600px] w-full overflow-hidden"
    >
      <div className="absolute inset-0 -top-20">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 sm:pb-20 text-center text-white">
        <span className="mb-4 sm:mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] backdrop-blur-md">
          {eyebrow}
        </span>

        <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] leading-[0.9] text-balance max-w-[18ch]">
          <span className="block overflow-hidden">
            <span className="inline-block">{title}</span>
          </span>
          {italic && (
            <span className="block overflow-hidden">
              <span className="inline-block italic">
                {italic}
              </span>
            </span>
          )}
        </h1>

        <p className="mt-5 sm:mt-8 max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-white/85">
          {description}
        </p>
      </div>
    </section>
  );
}

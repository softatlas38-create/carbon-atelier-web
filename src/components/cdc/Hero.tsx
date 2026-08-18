import { useEffect, useState } from "react";
import heroCar from "@/assets/hero-car.jpg";
import { GoldLink } from "./GoldButton";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700) * 0.15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="accueil" className="relative min-h-[100svh] overflow-hidden bg-carbon">
      <img
        src={heroCar}
        alt="Véhicule de luxe noir préparé dans le studio Carbon Diamond Car"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-[115%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, -${offset}px, 0) scale(1.04)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-carbon/35"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 pb-24 pt-36 lg:px-12 lg:pb-28">
        <div className="max-w-4xl">
          <span className="eyebrow block">Carbon Diamond Car</span>
          <h1 className="display-xl mt-7 text-[clamp(2.75rem,9vw,7.5rem)] text-foreground">
            Your car.
            <br />
            <span className="text-gold-gradient">Our craft.</span>
          </h1>
          <p className="mt-6 text-[clamp(1rem,2.2vw,1.5rem)] font-light uppercase tracking-[0.12em] text-foreground/80">
            L&apos;excellence automobile, repensée.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Préparation, protection et personnalisation automobile avec une exigence sans
            compromis.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <GoldLink href="#services">Découvrir nos services</GoldLink>
            <GoldLink href="#contact" variant="outline">
              Nous contacter
            </GoldLink>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-border">
          <span className="scroll-hint absolute inset-x-0 top-0 h-6 bg-primary" />
        </span>
      </div>
    </section>
  );
}
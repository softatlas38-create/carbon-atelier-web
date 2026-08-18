import { useEffect, useState } from "react";
import showcase from "@/assets/showcase.jpg";
import { GoldLink } from "./GoldButton";
import { Reveal } from "./Reveal";

export function VehicleShowcase() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("vehicule-signature");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = 1 - rect.top / window.innerHeight;
      setOffset(Math.max(-40, Math.min(40, progress * 40)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="vehicule-signature"
      className="relative min-h-[80svh] overflow-hidden bg-carbon lg:min-h-[92svh]"
    >
      <img
        src={showcase}
        alt="SUV de luxe noir mis en lumière dans un studio automobile"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-[118%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[80svh] max-w-[1600px] flex-col justify-center px-6 py-24 lg:min-h-[92svh] lg:px-12">
        <Reveal>
          <h2 className="display-xl max-w-4xl text-[clamp(2.25rem,7vw,6rem)] text-foreground">
            Votre véhicule.
            <br />
            <span className="text-gold-gradient">Votre signature.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10">
            <GoldLink href="#contact">Parlons de votre projet</GoldLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
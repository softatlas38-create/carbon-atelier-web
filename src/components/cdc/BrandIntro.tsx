import atelier from "@/assets/atelier.jpg";
import { Reveal } from "./Reveal";

export function BrandIntro() {
  return (
    <section id="a-propos" className="relative bg-carbon py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src={atelier}
                alt="Atelier Carbon Diamond Car : finition d'une carrosserie noire"
                width={1200}
                height={1504}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:var(--ease-lux)] hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 border border-border" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <span className="eyebrow">À propos</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-6 text-[clamp(2rem,5vw,4rem)] text-foreground">
              Plus qu&apos;un service automobile.
              <br />
              <span className="text-gold-gradient">Une signature.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Carbon Diamond Car réunit expertise technique, précision d&apos;exécution et
              finitions premium pour transformer et protéger des véhicules d&apos;exception. Chaque
              intervention est pensée comme un travail d&apos;atelier : matériaux sélectionnés,
              gestes maîtrisés, résultat sans compromis.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 h-px w-40 bg-primary/60" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
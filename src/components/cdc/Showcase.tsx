import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import habillage from "@/assets/svc-habillage.jpg";
import polissage from "@/assets/svc-polissage.jpg";
import ppf from "@/assets/svc-ppf.jpg";
import jantes from "@/assets/svc-jantes.jpg";
import tolerie from "@/assets/svc-tolerie.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const filters = [
  "Tous",
  "Habillage",
  "Polissage",
  "PPF",
  "Jantes",
  "Tôlerie",
  "Detailing",
] as const;

type Filter = (typeof filters)[number];

const works: { src: string; alt: string; category: Exclude<Filter, "Tous">; tall?: boolean }[] = [
  { src: gal1, alt: "Coupé sportif noir satiné", category: "Habillage", tall: true },
  { src: polissage, alt: "Correction de peinture sur carrosserie noire", category: "Polissage" },
  { src: ppf, alt: "Protection PPF avec effet perlant", category: "PPF" },
  { src: jantes, alt: "Jante forgée finition or", category: "Jantes", tall: true },
  { src: tolerie, alt: "Restauration de tôlerie en atelier", category: "Tôlerie" },
  { src: gal2, alt: "Intérieur cuir et carbone après detailing", category: "Detailing" },
  { src: gal3, alt: "Calandre de SUV de luxe après préparation", category: "Detailing", tall: true },
  { src: habillage, alt: "Covering noir mat sur aile avant", category: "Habillage" },
];

export function Showcase() {
  const [active, setActive] = useState<Filter>("Tous");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = useMemo(
    () => (active === "Tous" ? works : works.filter((w) => w.category === active)),
    [active],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="realisations" className="relative bg-carbon py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeading eyebrow="Réalisations" title="Notre savoir-faire" />

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap gap-2 lg:mt-16">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "border px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] transition-all duration-500 [transition-timing-function:var(--ease-lux)]",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {visible.map((work, i) => (
            <Reveal key={work.src + work.alt} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setLightbox(works.indexOf(work))}
                className="group relative block w-full overflow-hidden border border-border"
                aria-label={`Agrandir : ${work.alt}`}
              >
                <div className={cn("overflow-hidden", work.tall ? "aspect-[4/5]" : "aspect-[4/3]")}>
                  <img
                    src={work.src}
                    alt={work.alt}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition-all duration-[1200ms] [transition-timing-function:var(--ease-lux)] group-hover:scale-[1.06] group-hover:opacity-100"
                  />
                </div>
                <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-carbon/70 px-5 py-4 text-[0.62rem] uppercase tracking-[0.24em] text-foreground backdrop-blur-sm">
                  {work.category}
                  <span className="text-primary">Voir</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-carbon/95 p-4 backdrop-blur-xl sm:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={works[lightbox].src}
              alt={works[lightbox].alt}
              className="max-h-[80svh] w-full object-contain"
            />
            <figcaption className="mt-5 text-center text-[0.65rem] uppercase tracking-[0.26em] text-muted-foreground">
              {works[lightbox].category} — {works[lightbox].alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
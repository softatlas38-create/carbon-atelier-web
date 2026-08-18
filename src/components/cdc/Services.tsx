import { ArrowUpRight } from "lucide-react";
import habillage from "@/assets/svc-habillage.jpg";
import diagnostique from "@/assets/svc-diagnostique.jpg";
import tolerie from "@/assets/svc-tolerie.jpg";
import polissage from "@/assets/svc-polissage.jpg";
import ppf from "@/assets/svc-ppf.jpg";
import jantes from "@/assets/svc-jantes.jpg";
import vitres from "@/assets/svc-vitres.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

type Service = {
  num: string;
  name: string;
  desc: string;
  image: string;
  span: string;
  ratio: string;
};

const services: Service[] = [
  {
    num: "01",
    name: "Habillage",
    desc: "Personnalisation et finition intérieure et extérieure, du covering complet aux détails sur mesure.",
    image: habillage,
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    num: "02",
    name: "Diagnostique",
    desc: "Diagnostic électronique et contrôle technique approfondi pour véhicules premium.",
    image: diagnostique,
    span: "lg:col-span-5",
    ratio: "aspect-[4/5] lg:aspect-[4/5]",
  },
  {
    num: "03",
    name: "Tôlerie",
    desc: "Réparation de carrosserie et restauration de précision, ligne par ligne.",
    image: tolerie,
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    num: "04",
    name: "Lissage / Polissage",
    desc: "Correction de surface, lustrage et finition miroir sur peintures sensibles.",
    image: polissage,
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    num: "05",
    name: "Lavage / PPF",
    desc: "Nettoyage premium, film de protection de peinture et protection durable de la carrosserie.",
    image: ppf,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    num: "06",
    name: "Jantes",
    desc: "Personnalisation, rénovation et finition de jantes, teintes et textures au choix.",
    image: jantes,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    num: "07",
    name: "Teinture des vitres",
    desc: "Vitres teintées haut de gamme : style, intimité et confort thermique.",
    image: vitres,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeading eyebrow="Savoir-faire" title="Nos services" subtitle="Chaque détail compte." />

        <div className="mt-16 grid gap-4 lg:mt-24 lg:grid-cols-12 lg:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={(i % 2) * 100} className={cn("group", service.span)}>
              <a
                href="#contact"
                className="relative block h-full overflow-hidden border border-border bg-graphite/40"
              >
                <div className={cn("relative overflow-hidden", service.ratio)}>
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition-all duration-[1200ms] [transition-timing-function:var(--ease-lux)] group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "var(--gradient-veil)" }}
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <span className="text-[0.65rem] tracking-[0.32em] text-primary">
                    {service.num}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold uppercase tracking-tight text-foreground lg:text-3xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-700 [transition-timing-function:var(--ease-lux)] group-hover:opacity-100 max-lg:opacity-100">
                    {service.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-primary">
                    Découvrir
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
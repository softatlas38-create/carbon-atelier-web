import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const principles = [
  {
    num: "01",
    title: "Précision",
    text: "Chaque finition est réalisée avec une attention particulière.",
  },
  {
    num: "02",
    title: "Expertise",
    text: "Un savoir-faire dédié à l'automobile premium.",
  },
  {
    num: "03",
    title: "Exigence",
    text: "Nous ne cherchons pas simplement le résultat. Nous cherchons le résultat parfait.",
  },
  {
    num: "04",
    title: "Signature",
    text: "Chaque véhicule doit ressortir avec une identité unique.",
  },
];

export function Principles() {
  return (
    <section className="relative bg-carbon py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeading eyebrow="Pourquoi nous" title="Carbon Diamond Car" />

        <div className="mt-14 border-t border-border lg:mt-20">
          {principles.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <div className="group grid items-baseline gap-4 border-b border-border py-10 transition-colors duration-700 hover:bg-graphite/30 lg:grid-cols-12 lg:gap-10 lg:px-6 lg:py-14">
                <span className="text-[0.7rem] tracking-[0.32em] text-primary lg:col-span-2">
                  {p.num}
                </span>
                <h3 className="display-xl text-[clamp(1.75rem,4vw,3.25rem)] text-foreground lg:col-span-5">
                  {p.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:text-base">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
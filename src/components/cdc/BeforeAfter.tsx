import { useCallback, useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      move(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  return (
    <section className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Transformation"
          title="La transformation se voit."
          subtitle="Glissez pour comparer l'état d'origine et le résultat après correction et protection."
        />

        <Reveal delay={120}>
          <div
            ref={containerRef}
            className="relative mt-14 aspect-[16/10] w-full select-none overflow-hidden border border-border lg:mt-20 lg:aspect-[21/9]"
            onPointerDown={(e) => {
              dragging.current = true;
              move(e.clientX);
            }}
          >
            <img
              src={afterImg}
              alt="Carrosserie après correction et protection"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Carrosserie avant intervention"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute left-5 top-5 border border-border bg-carbon/70 px-4 py-2 text-[0.6rem] uppercase tracking-[0.28em] text-foreground backdrop-blur-sm">
              Avant
            </span>
            <span className="absolute right-5 top-5 border border-primary/40 bg-carbon/70 px-4 py-2 text-[0.6rem] uppercase tracking-[0.28em] text-primary backdrop-blur-sm">
              Après
            </span>

            <div
              className="absolute inset-y-0 w-px bg-primary"
              style={{ left: `${pos}%` }}
              aria-hidden="true"
            >
              <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-carbon/80 text-primary backdrop-blur-md">
                <span className="text-xs tracking-widest">◄►</span>
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparer avant et après"
              className="absolute inset-x-0 bottom-0 h-14 w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}